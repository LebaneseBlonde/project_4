from app import ma
from models.fund_model import Fund

class FundSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Fund
        load_instance = True

    business = fields.Nested('BusinessSchema')
    updates = fields.Nested('UpdateSchema')
    endorsements = fields.Nested('EndorsementSchema')
    