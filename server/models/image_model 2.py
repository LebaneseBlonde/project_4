from app import db
from models.base_model import Base

class Image(db.Model, Base):

    __tablename__ = 'images'

    image = db.Column(db.Text, nullable = False)
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id', ondelete='CASCADE'))