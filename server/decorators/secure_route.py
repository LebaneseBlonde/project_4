from flask import request, g
import jwt
from models.user_model import User
from models.business_model import Business
from config.environment import secret
from functools import wraps

def secure_route_user(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        token_with_bearer = request.headers.get('Authorization')
        
        if not token_with_bearer:
            return { 'message' : 'Unauthorized'}, 401

        token = token_with_bearer.replace('Bearer ', '')

        try:
            payload = jwt.decode(token, secret, 'HS256')
            user_id = payload['sub']
            user = User.query.get(user_id)

            if not user:
                return { 'message' : 'Unauthorized' }, 401
            
            g.current_user = user
        
        except jwt.ExpiredSignatureError:
            return { 'message' : 'Token is expired' }, 401

        except Exception as e:
            return { 'message' : str(e) }, 401

        return func(*args, **kwargs)

    return wrapper

def secure_route_business(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        token_with_bearer = request.headers.get('Authorization')
        
        if not token_with_bearer:
            return { 'message' : 'Unauthorized'}, 401

        token = token_with_bearer.replace('Bearer ', '')

        try:
            payload = jwt.decode(token, secret, 'HS256')
            business_id = payload['sub']
            business = Business.query.get(business_id)

            if not business:
                return { 'message' : 'Unauthorized' }, 401
            
            g.current_user = business
        
        except jwt.ExpiredSignatureError:
            return { 'message' : 'Token is expired' }, 401

        except Exception as e:
            return { 'message' : str(e) }, 401

        return func(*args, **kwargs)

    return wrapper
