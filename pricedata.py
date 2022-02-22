from coinbase.wallet.client import Client

coinbase_API_key = 'add-your-api-key'
coinbase_API_secret = 'add-your-api-secret-key'
client = Client(coinbase_API_key, coinbase_API_secret)
currency_code = 'USD'
price = client.get_spot_price(currency=currency_code)
print ('Current bitcoin price in %s: %s' % (currency_code, price.amount))
