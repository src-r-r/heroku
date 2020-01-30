from flask import Flask
#from flask_mongoalchemy import MongoAlchemy
from flask_pymongo import PyMongo

app = Flask(__name__)
# app.config['MONGOALCHEMY_SERVER']='mlab:server:config'
# app.config['MONGOALCHEMY_DATABASE'] = 'test'
# app.config['MONGOALCHEMY_CONNECTION_STRING'] = 'mongodb://localhost:27012/test'
app.config["MONGO_URI"] = "mongodb://jeff:G6q3ZQXcjTbYI8t8@cluster0-shard-00-00-l30b2.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
app.config["MONGO_DATABASE"] = "test"
# db = MongoAlchemy(app)
dbt = PyMongo(app)
#mongodb://jeff:G6q3ZQXcjTbYI8t8@cluster0-shard-00-00-l30b2.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin
# connection = pymongo.MongoClient(ab123456.mlab.com, 123456)
# db = connection[databasename]
# db.authenticate(database_user, database_pass)
# class User(db):
#     username = db.StringField()
#     phone = db.StringField()
#     city = db.StringField()
#     country = db.StringField()

