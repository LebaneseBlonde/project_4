from app import ma
from models.pledge_model import Pledge
from marshmallow import fields

class PledgeSchema(ma.SQLAlchemyAutoSchema):
    class meta:
        model = Pledge
        load_instance = True
    user = fields.Nested('UserSchema')
    fund = fields.Nested('FundSchema')
    
