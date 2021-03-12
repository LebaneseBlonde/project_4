from flask import Blueprint, request, g
from models.image_model import Image
from models.business_model import Business
from serializers.image_schema import ImageSchema
from serializers.business_schema import BusinessSchema
from decorators.secure_route import secure_route_business

image_schema = ImageSchema()
business_schema = BusinessSchema()

router = Blueprint(__name__, 'images')

@router.route('/businesses/<int:business_id>/gallery', methods=['POST'])
@secure_route_business
def add_gallery_image(business_id):

    image_dictionary = request.json

    business = Business.query.get(business_id)

    if business != g.current_user:
        return {'message': 'Unauthorized access.'}

    image = image_schema.load(image_dictionary)

    image.save()

    business.gallery.append(image)

    business.save()

    return business_schema.jsonify(business), 200


@router.route('/businesses/<int:business_id>/gallery/<int:image_id>', methods=['DELETE'])
@secure_route_business
def delete_gallery_image(business_id, image_id):

    business = Business.query.get(business_id)

    if business != g.current_user:
        return {'message': 'Unauthorized access.'}

    image_to_delete = Image.query.get(image_id)

    image_to_delete.remove()

    return business_schema.jsonify(business), 200