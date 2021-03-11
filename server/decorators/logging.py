from app import app
from flask import Flask, jsonify, request

@app.before_request
def log():
    # if request.json == '': request.json = None
    print(request)
    print(f'''--------------------------------
🔴 INCOMING REQUEST!
🔴 Request Method: {request.method}
🔴 Request URl: {request.url}
😺‍ Request Headers: {request.headers}
❓ Request Query: {request.args}  
--------------------------------''')
# 📦 Request Body: {request.json}
