from app import ma
from models.tier_model import Tier
from marshmallow import fields
from serializers.perk_schema import PerkSchema

class TierSchema(ma.SQLAlchemyAutoSchema):
    class meta:
        model = Tier
        load_instance = True
    
    fund = fields.Nested('FundSchema')
    perks = fields.Nested('PerkSchema')