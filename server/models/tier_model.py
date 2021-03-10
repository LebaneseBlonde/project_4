from app import db
from models.base_model import Base

class Tier(db.Model, Base):

    __tablename__ = 'tiers'

    price = db.Column(db.Integer, nullable = False)
    perks = db.Column(db.ARRAY, nullable = False)
    name = db.Column(db.String(30), nullable = False)