from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config.environment import db_URI
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt

app = Flask(__name__, static_folder='dist')

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
from controllers import update_controller
from controllers import tier_controller
from controllers import pledge_controller
from controllers import perk_controller


app.register_blueprint(businesses_controller.router, url_prefix='/api')
app.register_blueprint(users_controller.router, url_prefix='/api')
app.register_blueprint(image_controller.router, url_prefix='/api')
app.register_blueprint(funds_controller.router, url_prefix='/api')
app.register_blueprint(endorsements_controller.router, url_prefix='/api')
app.register_blueprint(update_controller.router, url_prefix='/api')
app.register_blueprint(tier_controller.router, url_prefix='/api')
app.register_blueprint(pledge_controller.router, url_prefix='/api')
app.register_blueprint(perk_controller.router, url_prefix='/api')

## registering your blueprints...
import os

@app.route('/', defaults={'path': ''}) # homepage
@app.route('/<path:path>') # any other path
def catch_all(path):
    dirname = os.path.dirname(__file__)
    filename = os.path.join(dirname, 'dist/' + path)

    if os.path.isfile(filename): # if path is a file, send it back
        return app.send_static_file(path)

    return app.send_static_file('index.html') # otherwise send back the index.html file