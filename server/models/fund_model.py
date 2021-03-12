from app import db
from models.base_model import Base
from models.update_model import Update
from models.pledge_model import Pledge

class Fund(db.Model, Base):

    __tablename__ = 'funds'

    subscription = db.Column(db.Boolean, nullable = False)
    fund_goal = db.Column(db.Integer, nullable = False)
    funds_raised = db.Column(db.Integer, nullable = False)
    description = db.Column(db.Text, nullable = False)

    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id', ondelete='CASCADE'))
    endorsements = db.relationship('Endorsement', backref='endorsements', cascade='all, delete')
    updates = db.relationship('Update', backref='updates', cascade='all, delete')
    pledges = db.relationship('Pledge', backref='pledges', cascade='all, delete')