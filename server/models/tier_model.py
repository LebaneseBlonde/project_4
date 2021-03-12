from app import db
from models.base_model import Base
from models.perk_model import Perk

class Tier(db.Model, Base):

    __tablename__ = 'tiers'

    price = db.Column(db.Integer, nullable = False)
    name = db.Column(db.String(30), nullable = False)
    fund_id = db.Column(db.Integer, db.ForeignKey('funds.id', ondelete='CASCADE'))
    perks = db.relationship('Perk', backref='perks', cascade='all, delete')