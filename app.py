from flask import Flask,jsonify, render_template

from flask_restful import Api
from flask_jwt_extended import JWTManager

from tt.model import dbt
from tt import resources

#app = Flask(__name__, static_url_path='/build')
app = Flask(__name__.split('.')[0], static_folder='client/build/static', template_folder="client/build")
api = Api(app)

app.config['JWT_SECRET_KEY'] = 'boost-is-the-secret-of-our-app'
jwt=JWTManager(app)

@app.route('/')
def index():
    return render_template('index.html')

api.add_resource(resources.UserRegistration, '/register')
api.add_resource(resources.UserLogin, '/login')

if __name__ == "__main__":
    app.debug = True
    app.run(host='https://reactflask.herokuapp.com')
