from app import ma
from models.image_model import Image
from marshmallow import fields

class ImageSchema(ma.SQLAlchemyAutoSchema):

    class Meta:
        model = Image
        load_instance = True

    business = fields.Nested('BusinessSchema')