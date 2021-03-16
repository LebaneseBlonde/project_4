from flask import Blueprint, request, g
from models.business_model import Business
from serializers.business_schema import BusinessSchema
from decorators.secure_route import secure_route_business

business_schema = BusinessSchema()


router = Blueprint(__name__, 'businesses')


@router.route('/businesses/register', methods=['POST'])
def register_business():
    business_data = request.json

    business = business_schema.load(business_data)

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


@router.route('/businesses/<int:business_id>')
@secure_route_business
def get_single_business(business_id):
    business = Business.query.get(business_id)

    if not business:
        return { 'message' : 'No business found.' }

    if g.current_user.id != business_id:
        return { 'message' : 'Unauthorized access.' }

    return business_schema.jsonify(business)


@router.route('/businesses/<category>/<query>', methods=['GET'])
def get_businesses(category, query):

    queried_businesses = []
    
    search_terms = query.split(' ')
    
    for term in search_terms:

        if term == 'the' or term == 'and' or term == '&':
            search_terms.remove(term)
    
    for term in search_terms:

        if category == 'All Categories':
            
            businesses_by_name = Business.query.filter(Business.name.ilike(f'%{term}%')).all()

            businesses_by_city = Business.query.filter(Business.address_city.ilike(f'%{term}%')).all()

            businesses_by_postcode = Business.query.filter(Business.address_postcode.ilike(f'%{term}%')).all()

            queried_businesses.extend(businesses_by_name)
            queried_businesses.extend(businesses_by_city)
            queried_businesses.extend(businesses_by_postcode)

        else:
            
            businesses_by_name = Business.query.filter(Business.name.ilike(f'%{term}%'), Business.category == category).all()

            businesses_by_city = Business.query.filter(Business.address_city.ilike(f'%{term}%'), Business.category == category).all()

            businesses_by_postcode = Business.query.filter(Business.address_postcode.ilike(f'%{term}%'), Business.category == category).all()
            
            queried_businesses.extend(businesses_by_name)
            queried_businesses.extend(businesses_by_city)
            queried_businesses.extend(businesses_by_postcode)


    if len(queried_businesses) == 0:
        return {'message': 'No businesses found'}, 404

    return business_schema.jsonify(queried_businesses, many=True), 200


@router.route('/businesses/<int:business_id>', methods=['PUT'])
@secure_route_business
def update_business(business_id):
    
    business_to_update = Business.query.get(business_id)

    if g.current_user != business_to_update:

        return {'message': 'Unauthorized access.'}

    business_dictionary = request.json

    updated_business = business_schema.load(
        business_dictionary,
        instance = business_to_update,
        partial = True)

    updated_business.save()

    return business_schema.jsonify(updated_business), 200


@router.route('/businesses/<int:business_id>', methods=['DELETE'])
@secure_route_business
def delete_business(business_id):
    
    business_to_delete = Business.query.get(business_id)

    if g.current_user != business_to_delete:

        return {'message': 'Unauthorized access.'}

    business_to_delete.remove()

    return {'message': 'Account successfully deleted'}, 200



