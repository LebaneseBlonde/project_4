from app import db
from models.base import Base

class Image(db.Model, Base):

    __tablename__ = 'images'

    image = db.Column(db.Text, nullable = False)