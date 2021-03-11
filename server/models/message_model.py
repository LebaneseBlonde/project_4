from app import db 
from models.base_model import Base
from models.conversation_model import Conversation

class Message(db.Model, Base):
    __tablename__ = 'messages'
    content = db.Column(db.Text, nullable=False)
    is_read = db.Column(db.Boolean, nullable=False)
    