from flask import Blueprint, request, g
from models.tier_model import Tier
from models.fund_model import Fund
from serializers.tier_schema import TierSchema
from serializers.fund_schema import FundSchema
from decorators.secure_route import secure_route_business

tier_schema = TierSchema()
fund_schema = FundSchema()
router = Blueprint(__name__, 'tiers')

@router.route('/funds/<int:fund_id>/tiers', methods=['GET'])
def get_tiers(fund_id):
    tiers = Tier.query.all()
    return tier_schema.jsonify(tiers), 200

@router.route('/funds/<int:fund_id>/tiers', methods=['POST'])
@secure_route_business
def create_tier(fund_id):
    tier_dictionary = request.json
    fund = Fund.query.get(fund_id)
    if fund.business_id != g.current_user.id:
        return {'message': 'Unauthorized access.'}
    tier = tier_schema.load(tier_dictionary)
    tier.fund = tier
    tier.save()
    return tier_schema.jsonify(tier), 201

@router.route('/funds/<int:fund_id>/tiers/<int:tier_id>', methods=['DELETE'])
@secure_route_business
def create_tier(fund_id, tier_id):
    fund = Fund.query.get(fund_id)
    if fund.business_id != g.current_user.id:
        return {'message': 'Unauthorized access.'}
    tier = Tier.query.get(tier_id)
    tier.remove()
    
    return fund_schema.jsonify(fund), 202

@router.route('/funds/<int:fund_id>/tiers/<int:tier_id>', methods=['PUT'])
@secure_route_business
def create_tier(fund_id, tier_id):
    fund = Fund.query.get(fund_id)
    if fund.business_id != g.current_user.id:
        return {'message': 'Unauthorized access.'}
    tier_dictionary = request.json
    existing_tier = Tier.query.get(tier_id)
    tier = tier_schema.load(
        tier_dictionary, instance=existing_tier, partial=True
    )
    tier.save()
    return fund_schema.jsonify(fund), 201