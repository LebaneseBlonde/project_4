from app import db
from models.base_model import Base
from models.user_model import User

class Endorsement(db.Model, Base):
    __tablename__ = 'endorsements'
    content = db.Column(db.Text, nullable=False)
