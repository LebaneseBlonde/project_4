from app import db
from models.base_model import Base

class Endorsement(db.Model, Base):

    __tablename__ = 'endorsements'
    
    content = db.Column(db.Text, nullable=False)

    fund_id = db.Column(db.Integer, db.ForeignKey('funds.id', ondelete='CASCADE'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'))
