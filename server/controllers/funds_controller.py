from flask import Blueprint, request, g
from models.fund_model import Fund
from models.business_model import Business
from serializers.fund_schema import FundSchema
from serializers.business_schema import BusinessSchema
from decorators.secure_route import secure_route_business

fund_schema = FundSchema()
business_schema = BusinessSchema()

router = Blueprint(__name__, 'funds')

@router.route('/businesses/<int:business_id>/fund', methods=['POST'])
@secure_route_business
def create_fund(business_id):

    business = Business.query.get(business_id)

    if business != g.current_user:
        return {'message': 'Unauthorized access.'}

    fund_dictionary = request.json

    fund = fund_schema.load(fund_dictionary)

    fund.save()

    business.fund.append(fund)

    business.save()

    return fund_schema.jsonify(fund), 200


@router.route('/businesses/<int:business_id>/fund/<int:fund_id>', methods=['PUT'])
@secure_route_business
def update_fund(business_id, fund_id):

    fund_to_update = Fund.query.get(fund_id)

    if fund_to_update.business_id != g.current_user.id:
        return {'message': 'Unauthorized access.'}

    fund_dictionary = request.json

    updated_fund = fund_schema.load(
        fund_dictionary,
        instance = fund_to_update,
        partial = True)

    updated_fund.save()

    business = Business.query.get(business_id)

    return business_schema.jsonify(business), 200


@router.route('/businesses/<int:business_id>/fund/<int:fund_id>', methods=['DELETE'])
@secure_route_business
def delete_fund(business_id, fund_id):

    fund_to_delete = Fund.query.get(fund_id)

    if fund_to_delete.business_id != g.current_user.id:
        return {'message': 'Unauthorized access.'}

    fund_to_delete.remove()

    business = Business.query.get(business_id)

    return business_schema.jsonify(business), 200