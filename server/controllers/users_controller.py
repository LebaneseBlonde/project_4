from flask import Blueprint, request, g
from models.user_model import User
from serializers.user_schema import UserSchema
from marshmallow.exceptions import ValidationError

user_schema = UserSchema()
router = Blueprint(__name__, 'users')

@router.route('/user/register')
def user_register():
    try:
        user = user_schema.load(request.json)

    except ValidationError as e:
        return {'errors': e.messages, 'messages': 'There was an issue with registering.'}
    
    user.save()
    return user_schema.jsonify(user)

@router.route('/')