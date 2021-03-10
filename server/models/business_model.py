from app import db
from models.base import Base

class Business(db.Model, Base):

    __tablename__ = 'businesses'

    name = db.Column(db.String(40), nullable = False, unique = True)
    location = db.Column(db.JSON, nullable = False)
    category = db.Column(db.String(30), nullable = False)
    bio = db.Column(db.Text, nullable = False)
    image = db.Column(db.Text, nullable = False)
    established = db.Column(db.Integer, nullable = False)
    email = db.Column(db.Text, nullable = False)