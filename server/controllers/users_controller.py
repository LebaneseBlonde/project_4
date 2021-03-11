from flask import Blueprint, request, g
from models.user_model import User
from serializers.user_schema import UserSchema
from marshmallow.exceptions import ValidationError
from decorators.secure_route import secure_route_user

user_schema = UserSchema()
router = Blueprint(__name__, 'users')

@router.route('/users/register', methods=['POST'])
def user_register():
    try:
        user = user_schema.load(request.json)

    except ValidationError as e:
        return { 'errors' : e.messages, 'messages' : 'There was an issue with registering.' }
    
    user.save()
    return user_schema.jsonify(user)

@router.route('/users/login', methods=['POST'])
def user_login():
    user = User.query.filter_by(email=request.json['email']).first()

    if not user: 
        return { 'message' : 'No user found with a corresponding email.' }

    if not user.validate_password(request.json['password']):
        return { 'message' : 'Invalid password.'}, 402

    token = user.generate_token()

    return { 'token' : token, 'message' : 'Sign in successful.' }

@router.route('/users/profile', methods=['GET'])
@secure_route_user
def get_user_profile():
    return user_schema.jsonify(g.current_user)