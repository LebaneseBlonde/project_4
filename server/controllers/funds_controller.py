from flask import Blueprint, request, g
from models.fund_model import Fund
from serializers.business_schema import BusinessSchema
from decorators.secure_route import secure_route_business