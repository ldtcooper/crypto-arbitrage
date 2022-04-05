def last_price(currency):
    """Gets the last price on 5 exchanges for the given currency (given it's in the list)."""
    import json
    import requests

    # return list for each exchange
    prices = {}

    # Making list for multiple crypto's
    crypto = {}

    crypto['Bitcoin'] = 'BTC'
    crypto['Ethereum'] = 'ETH'
    crypto['Litecoin'] = 'LTC'
    crypto['Terra'] = 'LUNA'
    crypto['Cardano'] = 'ADA'
    crypto['Polkadot'] = 'DOT'

    if (currency not in crypto.keys()):
        print(currency + " not in list at the moment! Sorry.")
        return

    # BIANCE
    response_binance = requests.get("https://api.binance.com/api/v3/ticker/price?symbol="+crypto[currency]+"USDT")
    data_binance = response_binance.json()
    price_binance = data_binance['price']
    prices['Binance'] = price_binance

    #COINBASE
    response_coinbase = requests.get("https://api.coinbase.com/v2/prices/"+crypto[currency]+"-USD/spot")

    if currency == "Terra":
        response_coinbase = requests.get("https://api.coinbase.com/v2/prices/WLUNA-USD/spot")

    data_coinbase = response_coinbase.json()
    price_coinbase = data_coinbase["data"]["amount"]
    prices['Coinbase'] = price_coinbase

    #HUOBI
    response_huobi = requests.get("https://api.huobi.pro/market/detail/merged?symbol="+crypto[currency].lower()+"usdt")
    data_huobi = response_huobi.json()
    price_huobi = data_huobi['tick']['close']
    prices['Huobi'] = price_huobi

    #KRAKEN
    response_kraken = requests.get("https://api.kraken.com/0/public/Ticker?pair="+crypto[currency]+"USD")
    data_kraken = response_kraken.json()
    # 'c' is the last closed price, there are nice things too
    price_kraken = data_kraken['result'][list(data_kraken['result'].keys())[0]]['c'][0]
    prices['Kraken'] = price_kraken

    #FTX
    response_ftx= requests.get("https://ftx.com/api/markets/"+crypto[currency]+"/USD")
    
    if currency == "Cardano":
        response_ftx= requests.get("https://ftx.com/api/markets/ADA-PERP")

    data_ftx = response_ftx.json()
    price_ftx = data_ftx['result']['last']
    prices['FTX'] = price_ftx

    return prices