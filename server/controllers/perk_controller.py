from flask import Blueprint, request, g
from models.perks_model import Perk
from models.tier_model import Tier
from models.fund_model import Fund
from serializers.perk_schema import PerkSchema
from serializers.tier_schema import TierSchema
from serializers.fund_schema import FundSchema
from decorators.secure_route import secure_route_business

perk_schema = PerkSchema()
tier_schema = TierSchema()
router = Blueprint(__name__, 'perks')

@router.route('/funds/<int:fund_id>/tiers/<int:tier_id>/perks', methods=['POST'])
@secure_route_business
def create_perk(fund_id, tier_id):
    perk_dictionary = request.json
    tier = Tier.query.get(tier_id)
    perk = perk_schema.load(perk_dictionary)
    perk.tier = tier
    perk.save()
    tier = Tier.query.get(tier_id)
    return tier_schema.jsonify(tier), 201

@router.route('/funds/<int:fund_id>/tiers/<int:tier_id>/perks/<int:perk_id>', methods=['PUT'])
@secure_route_business
def update_perk(fund_id, tier_id, perk_id):
    perk_dictionary = request.json
    existing_perk = Perk.query.get(perk_id)
    perk = perk_schema.load(
        perk_dictionary, instance=existing_perk, partial=True
    )
    perk.save()
    tier = Tier.query.get(tier_id)
    return tier_schema.jsonify(tier), 201

@router.route('/funds/<int:fund_id>/tiers/<int:tier_id>/perks/<int:perk_id>', methods=['DELETE'])
@secure_route_business
def delete_perk(fund_id, tier_id, perk_id):
    perk = Perk.query.get(perk_id)
    perk.remove()
    tier = Tier.query.get(tier_id)
    return tier_schema.jsonify(tier), 201


