import os
import json
from flask import Flask, request, Response
from flask_cors import CORS, cross_origin
import pyEX as py_ex

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

ethical_stocks = ["AAPL", "TSLA", "MSFT"]
growth_stocks = ["GOOGL", "FB", "CRM"]
index_stocks = ["VTI", "IVV", "SPY"]
quality_stocks = ["TMO", "UNH", "MA"]
value_stocks = ["PG", "JNJ", "BBY"]
iex_api = py_ex.Client(api_token='pk_f28aeb2fb6f14568b9be93337548d7ae', version='stable')


def get_data(strategy):
    stats = [ 'latestPrice', 'latestTime', 'change', 'changePercent', 'companyName', 'open', 'close', 'symbol', 'low', 'high', 'week52High', 'week52Low']
    output = []

    for ticker_name in strategy:
        stat_data = {}
        data = iex_api.quote(symbol=ticker_name)
        for stat in stats:
            stat_data[stat] = data[stat]
        output.append(stat_data)
    return output

@app.route('/getData', methods=['POST'])
@cross_origin(origin='*')
def get_strategy():
    select_strategy = request.json['Strategies']
    investment_amount = float(request.json['Amount'])
    suggestions = []
    suggestion_data = {}
    suggested_amount = ["{:.2f}".format(investment_amount*0.45), "{:.2f}".format(investment_amount*0.35), "{:.2f}".format(investment_amount*0.20)]
  
    for strategy in select_strategy:
        if strategy == "Ethical Investing":
            suggestion_data['Ethical Investing'] = get_data(ethical_stocks)
            suggestions.append(get_data(ethical_stocks))
        elif strategy == "Growth Investing":
            suggestion_data['Growth Investing'] = get_data(growth_stocks)
            suggestions.append(get_data(growth_stocks))
        elif strategy == "Index Investing":
            suggestion_data['Index Investing'] = get_data(index_stocks)
            suggestions.append(get_data(index_stocks))
        elif strategy == "Quality Investing":
            suggestion_data['Quality Investing'] = get_data(quality_stocks)
            suggestions.append(get_data(quality_stocks))
        elif strategy == "Value Investing":
            suggestion_data['Value Investing'] = get_data(value_stocks)
            suggestions.append(get_data(value_stocks))
        else:
            suggestion_data['Invalid Strategy'] = {}
            suggestions.append("Invalid Strategy")

    responseDict = { "strategiesResponse": suggestion_data, "amountResponse": suggested_amount}
    print(responseDict)
    suggestions=Response(json.dumps(responseDict), mimetype='application/json')
    suggestions.headers.add("Access-Control-Allow-Origin", "*")
    return suggestions

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
