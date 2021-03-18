from flask import Blueprint, request, g
from models.endorsement_model import Endorsement
from models.fund_model import Fund
from models.business_model import Business
from serializers.endorsement_schema import EndorsementSchema
from serializers.fund_schema import FundSchema
from serializers.business_schema import BusinessSchema
from decorators.secure_route import secure_route_user

endorsement_schema = EndorsementSchema()
fund_schema = FundSchema()
business_schema = BusinessSchema()


router = Blueprint(__name__, 'endorsements')

@router.route('/business/<int:business_id>/funds/<int:fund_id>/endorsements', methods=['POST'])
@secure_route_user
def post_endorsement(business_id, fund_id):

    endorsement_dictionary = request.json

    fund = Fund.query.get(fund_id)
    business = Business.query.get(business_id)

    endorsement = endorsement_schema.load(endorsement_dictionary)

    endorsement.fund_id = fund_id
    endorsement.user_id = g.current_user.id

    endorsement.save()

    return business_schema.jsonify(business), 201


@router.route('/funds/<int:fund_id>/endorsements/<int:endorsement_id>', methods=['PUT'])
@secure_route_user
def update_endorsement(fund_id, endorsement_id): 

    endorsement_dictionary = request.json

    endorsement_to_update = Endorsement.query.get(endorsement_id)

    if endorsement_to_update.user_id != g.current_user.id:
        return {'message': 'Unauthorized Access.'}

    endorsement = endorsement_schema.load(endorsement_dictionary, instance=endorsement_to_update, partial=True)

    endorsement.save()

    fund = Fund.query.get(fund_id)

    return fund_schema.jsonify(fund), 201


@router.route('/funds/<int:fund_id>/endorsements/<int:endorsement_id>', methods=['DELETE'])
@secure_route_user
def delete_endorsement(fund_id, endorsement_id):

    fund = Fund.query.get(fund_id)

    endorsement_to_delete = Endorsement.query.get(endorsement_id)

    if endorsement_to_delete.user_id != g.current_user.id:
        return {'message': 'Unauthorized Access.'}

    fund.endorsements.remove(endorsement_to_delete)

    fund.save()

    return fund_schema.jsonify(fund), 200

