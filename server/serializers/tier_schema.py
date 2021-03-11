from app import ma
from models.tier_model import Tier

class TierSchema(ma.SQLAlchemyAutoSchema):
    class meta:
        model = Tier
        load_instance = True
        