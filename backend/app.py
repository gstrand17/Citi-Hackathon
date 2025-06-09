from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/home')
def home():
    return jsonify({"message": "Welcome to the Flask API!"})

@app.route('/submit', methods=['POST'])
def submit():
    data = request.form.get('name')
    return f"Received POST request with name: {data}"

if __name__ == '__main__':
    app.run(debug=True)


