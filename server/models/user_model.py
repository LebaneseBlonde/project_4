from app import db, bcrypt
from models.base_model import Base
from sqlalchemy.ext.hybrid import hybrid_property
from datetime import *
from config.environment import secret
import jwt


class User(db.Model, Base):
    __tablename__ = 'users'
    username = db.Column(db.String(16), nullable=False, unique=True)
    email = db.Column(db.Text, nullable=False, unique=True)
    password_hash = db.Column(db.String(128), nullable=True)
    pledge = db.relationship('Pledge', backref='pledge', cascade='all, delete')
    endorsement = db.relationship('Endorsement', backref='endorsement', cascade='all, delete')



    @hybrid_property
    def password(self):
        pass

    @password.setter
    def password(self, password_plaintext):
        self.password_hash = bcrypt.generate_password_hash(password_plaintext).decode('utf-8')
    
    def validate_password(self, password_plaintext):
        return bcrypt.check_password_hash(self.password_hash, password_plaintext)
    
    def generate_token(self):
        payload = {
            'sub': self.id,
            'iat': datetime.utcnow(),
            'exp': datetime.utcnow() + timedelta(days=1)
        }

        token = jwt.encode(payload, secret, 'HS256')

        return token