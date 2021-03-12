from app import db
from models.base_model import Base

class Pledge(db.Model, Base):
    __tablename__ = 'pledges'
    amount = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'))