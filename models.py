from flask_sqlalchemy import SQLAlchemy
import random

db = SQLAlchemy()


class Message(db.Model):
    """Message model"""

    __tablename__ = "messages"

    id = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True
    )

    message = db.Column(
        db.Text,
        nullable=False,
        unique=True
    )

    @classmethod
    def get_random_message(cls):
        """Returns a random message from the database."""

        message_count =  Message.query.count()

        return Message.query.get_or_404(random.randint(1, message_count))


def connect_db(app):
    """Connect to database."""

    app.app_context().push()
    db.app = app
    db.init_app(app)