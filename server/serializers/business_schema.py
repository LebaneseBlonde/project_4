from app import ma
from models.business_model import Business
from serializers.fund_schema import FundSchema
from serializers.image_schema import ImageSchema
from marshmallow import fields

class BusinessSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Business
        load_instance = True
        exclude = ('password_hash',)
        load_only = ('email', 'password')

    password = fields.String(required=True)
    fund = fields.Nested('FundSchema', many=True)
    gallery = fields.Nested('ImageSchema', many=True)
    