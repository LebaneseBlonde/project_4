from app import db
from models.base_model import Base
 
class Update(db.Model, Base):
    __tablename__ = 'updates'
    title = db.Column(db.String(40), nullable=False)
    content = db.Column(db.Text, nullable=False)
    image = db.Column(db.Text, nullable=True)
    likes = db.Column(db.Integer, nullable=True)


