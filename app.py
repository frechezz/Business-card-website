from flask import Flask, render_template
import pytz
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def home():
    moscow_time = datetime.now(pytz.timezone('Europe/Moscow')).strftime('%H:%M:%S')
    return render_template('index.html', moscow_time=moscow_time)

if __name__ == '__main__':
    app.run(debug=True)