from app import ma
from models.endorsement_model import Endorsement
from marshmallow import fields


class EndorsementSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Endorsement
        load_instance = True

    fund = fields.Nested('FundSchema')
    
    user = fields.Nested('UserSchema')
