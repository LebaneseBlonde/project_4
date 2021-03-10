from app import db
from datetime import *

class Base:

    id = db.Column(db.Integer, primary_key = True)
    created_on = db.Column(db.DateTime, default = datetime.utcnow)

    def save(self):

        db.session.add(self)
        db.session.commit()

    def remove(self):

        db.session.delete(self)
        db.session.commit() 