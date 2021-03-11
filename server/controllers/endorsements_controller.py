from flask import Blueprint, request, g
from models.endorsement_model import Endorsement
from models.fund_model import Fund
from serializers.endorsement_schema import EndorsementSchema
from serializers.fund_schema import FundSchema
from decorators.secure_route import secure_route_user

endorsement_schema = EndorsementSchema()
fund_schema = FundSchema


router = Blueprint(__name__, 'endorsements')

@router.route('/businesses/<int:fund_id>/endorsements', methods=['POST'])
@secure_route_user
def post_endorsement(fund_id):

    endorsement_dictionary = request.json

    fund_to_endorse = Fund.query.get(fund_id)

    endorsement = endorsement_schema.load(endorsement_dictionary)

    endorsement.fund = fund_to_endorse

    endorsement.save()

    return endorsement_schema.jsonify(endorsement)


@router.route('/businesses/<int:fund_id>/endorsements/<int:endorsement_id>', methods=['PUT'])
@secure_route_user
def update_endorsement(fund_id, endorsement_id): 

    endorsement_dictionary = request.json

    existing_endorsement = Endorsement.query.get(endorsement_id)

    if existing_endorsement.user_id != g.current_user.id:
        return {'message': 'Unauthorized Access.'}

    endorsement = endorsement_schema.load(endorsement_dictionary, instance=existing_endorsement, partial=True)

    endorsement.save()

    fund = Fund.query.get(fund_id)

    return fund_schema.jsonify(fund), 201


@router.route('/businesses/<int:fund_id>/endorsements/<int:endorsement_id>', methods=['DELETE'])
@secure_route_user
def delete_endorsement(fund_id, endorsement_id):

    fund = Fund.query.get(fund_id)

    endorsement_to_delete = Endorsement.query.get(endorsement_id)

    fund.endorsements.remove(endorsement_to_delete)

    fund.save()

    return fund_schema.jsonify(fund), 200

