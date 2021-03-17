from flask import Blueprint, request, g
from models.pledge_model import Pledge
from models.user_model import User
from models.fund_model import Fund
from serializers.pledge_schema import PledgeSchema
from serializers.user_schema import UserSchema
from serializers.fund_schema import FundSchema
from decorators.secure_route import secure_route_user

pledge_schema = PledgeSchema()
user_schema = UserSchema()
fund_schema = FundSchema()
router = Blueprint(__name__, 'pledges')

@router.route('/funds/<int:fund_id>/pledges', methods=['POST'])
@secure_route_user
def create_pledge(fund_id):

    pledge_dictionary = request.json

    fund = Fund.query.get(fund_id)

    user = User.query.get(g.current_user.id) 

    pledge = pledge_schema.load(pledge_dictionary)

    pledge.save()
 
    fund.pledges.append(pledge)
    fund.save()

    user.pledges.append(pledge)
    user.save()

    return fund_schema.jsonify(fund), 201

@router.route('/funds/<int:fund_id>/pledges/<int:pledge_id>', methods=['DELETE'])
@secure_route_user
def remove_pledge(fund_id, pledge_id):
    pledge = Pledge.query.get(pledge_id)
    if pledge.user_id != g.current_user.id:
        return {'message': 'Unauthorized access.'}
    pledge.remove()
    fund = Fund.query.get(fund_id)
    return fund_schema.jsonify(fund), 200



    