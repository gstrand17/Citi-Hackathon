from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/home')
def home():
    return jsonify({"message": "Welcome to the Flask API!"})

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    name = data.get('name')
    return jsonify({"message": f"Received POST request with name: {name}"})

if __name__ == '__main__':
    app.run(debug=True)


