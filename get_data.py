import time
from datetime import datetime as dt
import psycopg2 as pg
from get_last_price_general import last_price

while True:
    # connect db
    conn = pg.connect("dbname = CryptoArbitrage user=causer password=crypto")
    cursor = conn.cursor()

    # current supported currencies
    currencies = [
        'Bitcoin', 
        'Ethereum',
        'Litecoin',
        'Terra',
        'Cardano',
        'Polkadot'
    ]

    tickers = {
        'Bitcoin': 'BTC',
        'Ethereum': 'ETH',
        'Litecoin': 'LTC',
        'Terra': 'LUNA',
        'Cardano': 'ADA',
        'Polkadot': 'DOT'
    }

    exchanges = [
        'Binance',
        'Coinbase',
        'Huobi',
        'Kraken',
        'FTX'
    ]

    date = dt(dt.now().year, dt.now().month, dt.now().day, dt.now().hour, 0, 0, 0)

    # put every currency in the table
    for c in currencies:
        print(c)
        prices = last_price(c)
        for i in range(len(exchanges)):
            cursor.execute("""
                INSERT INTO rates(rate_date, ex_id, ticker, rate)
                VALUES (%s, %s, %s, %s);
                """, (date, i+1, tickers[c], prices[exchanges[i]]))

    # commit changes
    conn.commit()

    # close the database
    cursor.close()
    conn.close()

    time.sleep(3600)