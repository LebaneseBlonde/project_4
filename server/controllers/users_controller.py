from flask import Blueprint, request, g
from models.user_model import User
from serializers.user_schema import UserSchema
from marshmallow.exceptions import ValidationError

user_schema = UserSchema()
router = Blueprint(__name__, 'users')