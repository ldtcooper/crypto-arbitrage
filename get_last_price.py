import json
import requests

#This code is just an example to get last BTC prices from 5 main exchange market Biance, Coinbase, Huobi, Kraken, and FTX

# Making list for multiple crypto's
currencies = "BTCUSDT"

# BIANCE
key = "https://api.binance.com/api/v3/ticker/price?symbol="
url = key + currencies
data_biance = requests.get(url)
data_biance = data_biance.json()
price_biance = data_biance['price']
print(f"{data_biance['symbol']} price is {price_biance} at Biance")

#COINBASE
response_coinbase = requests.get("https://api.coinbase.com/v2/prices/BTC-USD/spot")
data_coinbase = response_coinbase.json()
currency_coinbase = data_coinbase["data"]["base"]
price_coinbase = data_coinbase["data"]["amount"]
print(f"{currencies} price is {price_coinbase} at Coinbase")

#HUOBI
response_huobi = requests.get('https://api.huobi.pro/market/detail/merged?symbol=btcusdt')
data_huobi = response_huobi.json()
price_huobi = data_huobi['tick']['close']
print(f"{currencies} price is {price_huobi} at Huobi Global")

#KRAKEN
response_kraken = requests.get("https://api.kraken.com/0/public/Ticker?pair=BTCUSD")
data_kraken = response_kraken.json()
price_kraken = data_kraken['result']['XXBTZUSD']['c'][0]
print(f"{currencies} price is {price_kraken} at Kraken")

#FTX
response_ftx= requests.get('https://ftx.com/api/markets/BTC/USD')
data_ftx = response_ftx.json()
price_ftx = data_ftx['result']['last']
print(f"{currencies} price is {price_ftx} at FTX")


