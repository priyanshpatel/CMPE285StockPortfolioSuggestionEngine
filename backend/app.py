import os
import json
from flask import Flask, request, Response
from flask_cors import CORS, cross_origin
import pyEX as p


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
# CORS(app, resources={r"/*": {"origins": "*"}})

ethicalInvesting = ["CRM", "KMB", "HPE"]
growthInvesting = ["AMD", "SHOP", "SQ"]
indexInvesting = ["ILTB", "VOO", "VTI"]
qualityInvesting = ["UNH", "HD", "MA"]
valueInvesting = ["PG", "JNJ", "GE"]
apiClient = p.Client(api_token='pk_c9bc08eb6a32489ba43d656fafd082cd', version='stable')


def apiCall(investmentType):
    filtersToReturn = ['symbol', 'companyName', 'latestPrice', 'latestTime', 'change', 'changePercent']
    returnData = []

    # Looping through given stock and appending data to result
    for sym in investmentType:
        comp_data = {}
        print("***********", sym)
        data = apiClient.quote(symbol=sym)
        for filter in filtersToReturn:
            comp_data[filter] = data[filter]
        returnData.append(comp_data)
    return returnData

@app.route('/getData', methods=['POST'])
@cross_origin(origin='*')
def requestFunction():
    requestStrategies = request.json['Strategies']
    requestAmount = float(request.json['Amount'])
    strategiesResponse = []
    strategiesResponse2 = {}
    strategiesResponseAmount = ["{:.2f}".format(requestAmount*0.5), "{:.2f}".format(requestAmount*0.30), "{:.2f}".format(requestAmount*0.20)]
    print("_-----------------------------")
    print(requestAmount)
    print(strategiesResponseAmount)
    for strategy in requestStrategies:
        if strategy == "Ethical Investing":
            strategiesResponse2['Ethical Investing'] = apiCall(ethicalInvesting)
            strategiesResponse.append(apiCall(ethicalInvesting))
        elif strategy == "Growth Investing":
            strategiesResponse2['Growth Investing'] = apiCall(growthInvesting)
            strategiesResponse.append(apiCall(growthInvesting))
        elif strategy == "Index Investing":
            strategiesResponse2['Index Investing'] = apiCall(indexInvesting)
            strategiesResponse.append(apiCall(indexInvesting))
        elif strategy == "Quality Investing":
            strategiesResponse2['Quality Investing'] = apiCall(qualityInvesting)
            strategiesResponse.append(apiCall(qualityInvesting))
        elif strategy == "Value Investing":
            strategiesResponse2['Value Investing'] = apiCall(valueInvesting)
            strategiesResponse.append(apiCall(valueInvesting))
        else:
            strategiesResponse2['Invalid Strategy'] = {}
            strategiesResponse.append("Invalid Strategy")

    responseDict = { "strategiesResponse": strategiesResponse2, "amountResponse": strategiesResponseAmount}
    print(responseDict)
    strategiesResponse=Response(json.dumps(responseDict), mimetype='application/json')
    strategiesResponse.headers.add("Access-Control-Allow-Origin", "*")
    return strategiesResponse

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
