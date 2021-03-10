from app import db
from base_model import Base
from models.user_model import User
from models.business_model import Business

class Conversation(db.Model, Base):
    __tablename__ = 'conversations'
    