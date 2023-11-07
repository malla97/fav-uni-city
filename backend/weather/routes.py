from flask import Blueprint
import requests

weather_bp = Blueprint('weather', __name__)

@weather_bp.route('/get_weather')
def get_weather():
    # This url only gets the current temperature for Tampere
    URL = 'https://api.open-meteo.com/v1/forecast?latitude=61.50&longitude=28.79&current=temperature_2m'
    response = requests.get(URL)
    if response.status_code == 200:
        data = response.json()
        temp_unit = data['current_units']['temperature_2m']
        temp = data['current']['temperature_2m']
        print(f'{temp} {temp_unit}')
        return "Weather data in console"
    else:
        print("moi from routes, this failed")
        return 'Request failed'

''' 
"https://api.open-meteo.com/v1/forecast?latitude=61.50&longitude=28.79&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
'''

# ("Tampere", 61.49911, 23.78712)