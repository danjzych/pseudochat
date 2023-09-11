# noinspection PyUnresolvedReferences
from app import app
from models import db, Message

db.drop_all()
db.create_all()

m1 = Message(message='To be honest, I can''t read your messages! I''m just responding to show you I work.')

m2 = Message(message='Just imagine this is an interesting message.')

m3 = Message(message='You seem cool, I wish I knew what you were saying!')

m4 = Message(message='So, do you just want to chat all day? I do!')

m5 = Message(message='I was built using Flask, SQLAlchemy, and jQuery.')

db.session.add_all([m1, m2, m3, m4, m5])
db.session.commit()
