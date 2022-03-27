def last_price(currency):
    """Gets the last price on 5 exchanges for the given currency (given it's in the list)."""
    import json
    import requests

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
    print(f"{data_binance['symbol']} price is {price_binance} at Binance")

    #COINBASE
    response_coinbase = requests.get("https://api.coinbase.com/v2/prices/"+crypto[currency]+"-USD/spot")
    data_coinbase = response_coinbase.json()
    currency_coinbase = data_coinbase["data"]["base"]
    price_coinbase = data_coinbase["data"]["amount"]
    print(f"{currency_coinbase} price is {price_coinbase} at Coinbase")

    #HUOBI
    response_huobi = requests.get("https://api.huobi.pro/market/detail/merged?symbol="+crypto[currency].lower()+"usdt")
    data_huobi = response_huobi.json()
    price_huobi = data_huobi['tick']['close']
    print(f"{crypto[currency]} price is {price_huobi} at Huobi Global")

    #KRAKEN
    response_kraken = requests.get("https://api.kraken.com/0/public/Ticker?pair="+crypto[currency]+"USD")
    data_kraken = response_kraken.json()
    # 'c' is the last closed price, there are nice things too
    price_kraken = data_kraken['result'][list(data_kraken['result'].keys())[0]]['c'][0]
    print(f"{crypto[currency]} price is {price_kraken} at Kraken")

    #FTX
    response_ftx= requests.get("https://ftx.com/api/markets/"+crypto[currency]+"/USD")
    data_ftx = response_ftx.json()
    price_ftx = data_ftx['result']['last']
    print(f"{crypto[currency]} price is {price_ftx} at FTX")