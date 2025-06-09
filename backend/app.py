from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/home')
def home():
    return jsonify({"message": "Welcome to the Flask API!"})


def calculate_retirement_value(current_age, retirement_age, annual_contribution, annual_return):
    years = retirement_age - current_age
    total = 0
    for year in range(1, years + 1):
        total += annual_contribution * ((1 + annual_return) ** (years - year + 1))
    return total

@app.route('/trad401k', methods=['GET'])
def trad_401k():
    try:
        current_age = int(request.args.get('current_age'))
        retirement_age = int(request.args.get('retirement_age'))
        annual_income = float(request.args.get('annual_contribution'))
        income_percent = float(request.args.get('income_percent'))
        annual_return = float(request.args.get('annual_return'))
    except (TypeError, ValueError):
        return jsonify({"error": "Invalid input"}), 400

    if retirement_age <= current_age:
        return jsonify({"error": "Retirement age must be greater than current age"}), 400
    
    if annual_income * income_percent >= 23500:
        return jsonify({"error": "The annual contribution is above the limit"}), 400

    final_amount = calculate_retirement_value(current_age, retirement_age, annual_income * income_percent, annual_return)

    return jsonify({
        "account_type": "Traditional 401k",
        "current_age": current_age,
        "retirement_age": retirement_age,
        "annual_contribution": annual_income * income_percent,
        "estimated_value": final_amount
    })


@app.route('/rothira', methods=['GET'])
def roth_ira():
    try:
        current_age = int(request.args.get('current_age'))
        retirement_age = int(request.args.get('retirement_age'))
        annual_income = float(request.args.get('annual_contribution'))
        income_percent = float(request.args.get('income_percent'))
        annual_return = float(request.args.get('annual_return'))
    except (TypeError, ValueError):
        return jsonify({"error": "Invalid input"}), 400

    if retirement_age <= current_age:
        return jsonify({"error": "Retirement age must be greater than current age"}), 400
    
    if annual_income * income_percent >= 7000:
        return jsonify({"error": "The annual contribution is above the limit"}), 400

    final_amount = calculate_retirement_value(current_age, retirement_age, annual_income * income_percent, annual_return)

    return jsonify({
        "account_type": "roth-ira",
        "current_age": current_age,
        "retirement_age": retirement_age,
        "annual_contribution": annual_income * income_percent,
        "estimated_value": final_amount
    })


if __name__ == '__main__':
    app.run(debug=True)


#keep a block -> if above the limit 
# roth 401k - 23500 -> 
# tradiational, 
# 
# roth IRA limit -7000, 
# also include the error amount

