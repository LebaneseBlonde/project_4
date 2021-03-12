from app import ma
from models.user_model import User
from marshmallow import fields
from serializers.pledge_schema import PledgeSchema
from serializers.endorsement_schema import EndorsementSchema


class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True
        exclude = ('password_hash',)
        load_only = ('email', 'password')

    password = fields.String(required=True)
    pledges = fields.Nested('PledgeSchema', many=True)
    endorsements = fields.Nested('EndorsementSchema', many=True)
    
