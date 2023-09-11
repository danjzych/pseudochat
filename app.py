import os

from flask import Flask, request, redirect, render_template, session
# from flask_debugtoolbar import DebugToolbarExtension

from models import db, connect_db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
    "DATABASE_URL", 'postgresql:///pseudochat')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

@app.get('/')
def show_homepage():

    return render_template('index.html')