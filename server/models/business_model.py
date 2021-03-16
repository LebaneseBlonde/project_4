from app import db, bcrypt
from models.base_model import Base
from models.image_model import Image
from sqlalchemy.ext.hybrid import hybrid_property
from datetime import *
from config.environment import secret
import jwt

class Business(db.Model, Base):

    __tablename__ = 'businesses'

    name = db.Column(db.String(40), nullable = False, unique = True)
    address_1 = db.Column(db.Text, nullable = False)
    address_2 = db.Column(db.Text, nullable = False)
    address_city = db.Column(db.Text, nullable = False)
    address_postcode = db.Column(db.Text, nullable = False)
    category = db.Column(db.String(30), nullable = False)
    bio = db.Column(db.Text, nullable = False)
    image = db.Column(db.Text, nullable = False)
    established = db.Column(db.String(20), nullable = False)
    email = db.Column(db.Text, nullable = False)
    password_hash = db.Column(db.String(128), nullable=True)

    fund = db.relationship('Fund', backref='fund', cascade='all, delete')
    gallery = db.relationship('Image', backref='gallery', cascade='all, delete')

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
            'exp': datetime.utcnow() + timedelta(days=1),
            'isBusiness': 'true'
        }

        token = jwt.encode(payload, secret, 'HS256')

        return token