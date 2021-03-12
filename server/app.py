from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config.environment import db_URI
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt

app = Flask(__name__)

from decorators import logging, errors

app.config['SQLALCHEMY_DATABASE_URI'] = db_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)
bcrypt = Bcrypt(app)

from controllers import businesses_controller
from controllers import users_controller
from controllers import image_controller
from controllers import funds_controller
from controllers import endorsements_controller

app.register_blueprint(businesses_controller.router, url_prefix='/api')
app.register_blueprint(users_controller.router, url_prefix='/api')
app.register_blueprint(image_controller.router, url_prefix='/api')
app.register_blueprint(funds_controller.router, url_prefix='/api')
app.register_blueprint(endorsements_controller.router, url_prefix='/api')
