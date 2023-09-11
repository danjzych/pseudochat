import os

from flask import Flask, redirect, render_template, jsonify
# from flask_debugtoolbar import DebugToolbarExtension

from models import db, connect_db, Message

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
    "DATABASE_URL", 'postgresql:///pseudochat')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

@app.get('/')
def show_homepage():

    return render_template('index.html')


@app.get('/api/get-message')
def get_message():
    """Returns JSON for a random Psuedochat message."""

    data = {
        "id": Message.get_random_message().id,
        "message": Message.get_random_message().message
    }

    return jsonify(data)