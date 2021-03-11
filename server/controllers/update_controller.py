from flask import Blueprint, request, g
from models.update_model import Update
from serializers.update_schema import UpdateSchema
from decorators.secure_route import secure_route

update_schema = UpdateSchema()
router = Blueprint(__name__, 'updates')