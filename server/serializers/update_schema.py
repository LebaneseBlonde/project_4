from app import ma
from models.update_model import Update

class UpdateSchema(ma.SQLAlchemyAutoSchema):
    class meta:
        model = Update
        load_instance = True
        