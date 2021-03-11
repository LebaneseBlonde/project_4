from flask import Blueprint, request

router = Blueprint(__name__, 'businesses')

@router.route('/businesses', methods=['GET'])
def get_businesses():
    return {'message': 'get businesses'}, 200

@router.route('/businesses', methods=['POST'])
def post_business():
    return {'message': 'post business'}, 201

@router.route('/businesses/<int:business_id>', methods=['GET'])
def get_single_business(business_id):
    return {'message': 'get single business'}, 200

@router.route('/businesses/<int:business_id>', methods=['PUT'])
def put_business(business_id):
    return {'message': 'put business'}, 200

@router.route('/businesses/<int:business_id>', methods=['DELETE'])
def delete_business(business_id):
    return {'message': 'delete business'}, 200


