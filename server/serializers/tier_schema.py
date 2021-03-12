from app import ma
from models.tier_model import Tier
from marshmallow import fields
from serializers.perk_schema import PerkSchema
from serializers.pledge_schema import PledgeSchema

class TierSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Tier
        load_instance = True
    
    fund = fields.Nested('FundSchema')
    perks = fields.Nested('PerkSchema', many=True)
    