from flask import Flask
from weather.routes import weather_bp

def create_app():
    app = Flask(__name__)

    app.register_blueprint(weather_bp)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)