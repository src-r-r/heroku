from flask import Flask
from flask_mongoalchemy import MongoAlchemy

app = Flask(__name__)
app.config['MONGOALCHEMY_DATABASE'] = 'test'
app.config['MONGOALCHEMY_CONNECTION_STRING'] = 'mongodb://localhost:27017/test'
db = MongoAlchemy(app)

class User(db.Document):
    username = db.StringField()
    phone = db.StringField()
    city = db.StringField()
    country = db.StringField()

