from app import db
from models.base_model import Base

class Perk(db.Model, Base):
    __tablename__ = 'perks'

    perk = db.Column(db.Text, nullable=False)
    tier_id = db.Column(db.Integer, db.ForeignKey('tiers.id', ondelete='CASCADE'))