from app import ma
from models.endorsement_model import Endorsement


class EndorsementSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Endorsement
        load_instance = True