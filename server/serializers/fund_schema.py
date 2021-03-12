from app import ma
from models.fund_model import Fund
from serializers.endorsement_schema import EndorsementSchema
from serializers.update_schema import UpdateSchema
from serializers.pledge_schema import PledgeSchema
from marshmallow import fields

class FundSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Fund
        load_instance = True

    business = fields.Nested('BusinessSchema')
    endorsements = fields.Nested('EndorsementSchema', many=True)
    updates = fields.Nested('UpdateSchema', many=True)
    pledges = fields.Nested('PledgeSchema', many=True)
    