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

ANNUAL_RETURN = 0.07

def calculate_401k_value(current_age, retirement_age, annual_contribution):
    years = retirement_age - current_age
    total = 0
    for year in range(1, years + 1):
        total += annual_contribution * ((1 + ANNUAL_RETURN) ** (years - year + 1))
    return total

@app.route('/trad401k', methods=['GET'])
def trad_401k():
    try:
        current_age = int(request.args.get('current_age'))
        retirement_age = int(request.args.get('retirement_age'))
        annual_contribution = float(request.args.get('annual_contribution'))
    except (TypeError, ValueError):
        return jsonify({"error": "Invalid input"}), 400

    if retirement_age <= current_age:
        return jsonify({"error": "Retirement age must be greater than current age"}), 400

    final_amount = calculate_401k_value(current_age, retirement_age, annual_contribution)

    return jsonify({
        "account_type": "Traditional 401k",
        "current_age": current_age,
        "retirement_age": retirement_age,
        "annual_contribution": annual_contribution,
        "estimated_value": final_amount
    })


if __name__ == '__main__':
    app.run(debug=True)


