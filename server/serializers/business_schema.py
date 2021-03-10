from app import ma
from models.business_model import Business
from marshmallow import fields

class BusinessSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Business
        load_instance = True
        exclude = ('password_hash')
        load_only = ('email', 'password')

    password = fields.String(required=True)
    fund = fields.Nested('FundSchema')
    images = fields.Nested('ImageSchema', many=True)
    conversations = fields.Nested('ConversationSchema', many=True)
