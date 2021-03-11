from app import ma
from models.user_model import User
from marshmallow import fields

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True
        exclude = ('password_hash',)
        load_only = ('email', 'password')

    password = fields.String(required=True)
    funds = fields.Nested('FundSchema', many=True)
    conversations = fields.Nested('ConversationSchema', many=True)
    pledges = fields.Nested('PledgeSchema', many=True)
    
