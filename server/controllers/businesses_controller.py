from flask import Blueprint, request, g
from models.business_model import Business
from serializers.business_schema import BusinessSchema
from marshmallow.exceptions import ValidationError

business_schema = BusinessSchema()


router = Blueprint(__name__, 'businesses')


@router.route('/businesses/register', methods=['POST'])
def register_business():
    business_data = request.json

    try:
        business = business_schema..load(business_data)

    except ValidationError as e:
        return { 'errors': e.messages, 'messages': 'Something went wrong'}

    business.save()

    return business_schema.jsonify(business)


@router.route('/businesses/login', methods=['POST'])
def login_business():
    business = Business.query.filter_by(email = request.json['email']).first()

    if not business:
        return {'message': 'Business account not found'}

    if not business.validate_password(request.json['password']):
        return {'message': 'Unauthorized'}, 402

    token = business.generate_token()

    return {'token': token, 'message': 'welcome back'}


@router.route('/businesses/<category>/<query>', methods=['GET'])
def get_businesses(category, query):

    businesses_by_name = None
    businesses_by_city = None


    if category == 'All Categories':

        businesses_by_name = Business.query.filter(name.like(f'{query}')).all()

        businesses_by_city = Business.query.filter(location['city'].like(f'{query}')).all()

    else:

        businesses_by_name = Business.query.filter(name.like(f'{query}    '), category = category).all()

        businesses_by_city = Business.query.filter(location['city'].like(f'{query}'), category = category).all()

    if not business_by_name and not business_by_city:

        return {'message': 'No businesses not found'}, 404

    return business_schema.jsonify(businesses_by_name), business_schema.jsonify(businesses_by_city), 200


@router.route('/businesses/<int:business_id>', methods=['GET'])
def get_single_business(business_id):
    return {'message': 'get single business'}, 200

@router.route('/businesses/<int:business_id>', methods=['PUT'])
def put_business(business_id):
    return {'message': 'put business'}, 200

@router.route('/businesses/<int:business_id>', methods=['DELETE'])
def delete_business(business_id):
    return {'message': 'delete business'}, 200


