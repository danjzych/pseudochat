from flask_sqlalchemy import SQLAlchemy

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


def connect_db(app):
    """Connect to database."""

    app.app_context().push()
    db.app = app
    db.init_app(app)