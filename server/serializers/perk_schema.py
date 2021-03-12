from app import ma
from models.perk_model import Perk
from marshmallow import fields

class PerkSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Perk
        load_instance = True
    
    tier = fields.Nested('TierSchema')