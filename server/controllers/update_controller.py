from flask import Blueprint, request, g
from models.update_model import Update
from models.fund_model import Fund
from serializers.update_schema import UpdateSchema
from serializers.fund_schema import FundSchema
from decorators.secure_route import secure_route_business

update_schema = UpdateSchema()
fund_schema = FundSchema()
router = Blueprint(__name__, 'updates')

@router.route('/funds/<int:fund_id>/updates', methods=['GET'])
def get_updates(fund_id):
    updates = Update.query.all()
    return update_schema.jsonify(updates), 200

@router.route('/funds/<int:fund_id>/updates', methods=['POST'])
@secure_route_business
def create_update(fund_id):
    update_dictionary = request.json
    fund = Fund.query.get(fund_id)
    update = update_schema.load(update_dictionary)
    update.fund = fund
    update.save()
    return update_schema.jsonify(update), 201

@router.route('/funds/<int:fund_id>/updates/<int:update_id>', methods=['DELETE'])
@secure_route_business
def delete_update(fund_id, update_id):
    update = Update.query.get(update_id)
    update.remove()
    fund = Fund.query.get(fund_id)
    return fund_schema.jsonify(fund), 202

@router.route('/funds/<int:fund_id>/updates/<int:update_id>', methods=['PUT'])
@secure_route_business
def update_update(fund_id, update_id):
    update_dictionary = request.json
    existing_update = Update.query.get(update_id)
    update = update_schema.load(
        update_dictionary, instance=existing_update, partial=True
    )
    update.save()
    fund = Fund.query.get(fund_id)
    return fund_schema.jsonify(fund), 201

