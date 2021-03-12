from flask import Blueprint, request, g
from models.perk_model import Perk
from models.tier_model import Tier
from models.fund_model import Fund
from serializers.perk_schema import PerkSchema
from serializers.tier_schema import TierSchema
from serializers.fund_schema import FundSchema
from decorators.secure_route import secure_route_business

perk_schema = PerkSchema()
tier_schema = TierSchema()
fund_schema = FundSchema()
router = Blueprint(__name__, 'perks')

@router.route('/funds/<int:fund_id>/tiers/<int:tier_id>/perks', methods=['POST'])
@secure_route_business
def create_perk(fund_id, tier_id):
    perk_dictionary = request.json
    tier = Tier.query.get(tier_id)
    fund = Fund.query.get(fund_id)
    if fund.business_id != g.current_user.id:
        return {'message': 'Unauthorized access.'}
    perk = perk_schema.load(perk_dictionary)
    perk.tier_id = tier_id
    perk.save()

    return fund_schema.jsonify(fund), 201

@router.route('/funds/<int:fund_id>/tiers/<int:tier_id>/perks/<int:perk_id>', methods=['PUT'])
@secure_route_business
def update_perk(fund_id, tier_id, perk_id):
    perk_dictionary = request.json
    fund = Fund.query.get(fund_id)
    if fund.business_id != g.current_user.id:
        return {'message': 'Unauthorized access.'}
    existing_perk = Perk.query.get(perk_id)
    perk = perk_schema.load(
        perk_dictionary, instance=existing_perk, partial=True
    )
    perk.save()
    return fund_schema.jsonify(fund), 201

@router.route('/funds/<int:fund_id>/tiers/<int:tier_id>/perks/<int:perk_id>', methods=['DELETE'])
@secure_route_business
def delete_perk(fund_id, tier_id, perk_id):
    perk = Perk.query.get(perk_id)
    fund = Fund.query.get(fund_id)
    if fund.business_id != g.current_user.id:
        return {'message': 'Unauthorized access.'}
    perk.remove()
    return fund_schema.jsonify(fund), 201


