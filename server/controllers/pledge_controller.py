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

@router.route('/pledges', methods=['POST'])
@secure_route_user
def create_pledge():
    pledge_dictionary = request.json
    pledge = pledge_schema.load(pledge_dictionary)
    user = User.query.get(g.current_user)
    #!fund = how to get the fund here?
    pledge.user_id = user.id
    pledge.fund = fund
    pledge.save()
    return user_schema.jsonify(user)

@router.route('/pledges/<int:pledge_id>', methods=['DELETE'])
@secure_route_user
def remove_pledge(pledge_id):
    pledge = Pledge.query.get(pledge_id)
    if pledge.user_id != g.current_user.id:
        return {'message': 'Unauthorized access.'}
    pledge.remove()
    user = User.query.get(g.current_user)
    return user_schema.jsonify(user)



    