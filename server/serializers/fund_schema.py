from app import ma
from models.fund_model import Fund
from serializers.endorsement_schema import EndorsementSchema
from marshmallow import fields

class FundSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Fund
        load_instance = True

    business = fields.Nested('BusinessSchema')
    updates = fields.Nested('UpdateSchema')
    endorsements = fields.Nested('EndorsementSchema', many=True)
    