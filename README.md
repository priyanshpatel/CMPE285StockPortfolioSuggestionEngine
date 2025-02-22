# CMPE 285 Project: Stock Portfolio Suggestion Engine
- Video Link: https://youtu.be/M8513MQTtm0

## About Project:
Input: User will input dollar amount to invest in USD (Minimum is $5000 USD)

Pick one or two investment strategies:
- Ethical Investing
- Growth Investing
- Index Investing
- Quality Investing
- Value Investing

The engine needs to assign stocks or ETFs for a selected investment strategy. E.g.

Index Investing strategy could map to the following ETFs:
- Vanguard Total Stock Market ETF (VTI)
- iShares Core MSCI Total Intl Stk (IXUS)
- iShares Core 10+ Year USD Bond (ILTB)

Ethical Investing strategy could map to these stocks:
- Apple (APPL)
- Adobe (ADBE)
- Nestle (NSRGY)

Each strategy map to at least 3 different stocks/ETFs.

Output:

The suggestion engine will output:

- Which stocks are selected based on inputted strategies.
- How the money is divided to buy the suggested stock.
- The current values (up to the sec via Internet) of the overall portfolio (including all the stocks / ETFs)
- A weekly trend of the portfolio value. In order words, keep 5 days history of the overall portfolio value.

## Instructions to Setup The Project:
The Flask application is ran with a localhost server (IP address 127.0.0.1:5000)

### To run backend:
- Open code in an IDE of your choice
- Open terminal and navigate to CMPE285StockPortfolioSuggestionEngine/backend
- run command pip install -r requirements.txt
- run command pip install --upgrade Flask
- run command pip install --upgrade Werkzeug
- run command set FLASK_APP = ‘app’ (use ‘export’ instead of ‘set’ for Linux machine)
- run command flask run

###	To run client
- Open terminal and navigate to CMPE285StockPortfolioSuggestionEngine/client
- run command npm install
- run command npm start

## Screenshots
<img width="1429" alt="Screen Shot 2022-05-23 at 12 58 19 PM" src="https://user-images.githubusercontent.com/43277093/169896443-4362aa14-c3af-4b26-80ee-fac544e8f61e.png">
<img width="1430" alt="Screen Shot 2022-05-23 at 12 58 01 PM" src="https://user-images.githubusercontent.com/43277093/169896494-340e044b-c602-4a3d-b4d3-5cffee606d99.png">

