from app import db
from models.base_model import Base

class Fund(db.Model, Base):

    __tablename__ = 'funds'

    subscription = db.Column(db.Boolean, nullable = False)
    fund_goal = db.Column(db.Integer, nullable = False)
    funds_raised = db.Column(db.Integer, nullable = False)
    description = db.Column(db.Text, nullable = False)

    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id', ondelete='CASCADE'))
    endorsements = db.relationship('Endorsement', backref='endorsements', cascade='all, delete')