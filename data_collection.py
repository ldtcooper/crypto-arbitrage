import pandas as pd
import yfinance as yf
from yahoofinancials import YahooFinancials
from pandas_datareader import data as pdr

#References
#https://pypi.org/project/yahoofinancials/
#https://pypi.org/project/yfinance/
#https://www.analyticsvidhya.com/blog/2021/06/download-financial-dataset-using-yahoo-finance-in-python-a-complete-guide/

#Get BTC-USD daily data from YahooFinance for specific dates
# btc_df = yf.download('BTC-USD',
#                       start='2019-01-01',
#                       end='2022-02-20',
#                       progress=False,
# )
# btc_df.head()

#Or get BTC-USD daily data for all times
data = yf.download(  # or pdr.get_data_yahoo(...
        # tickers list or string as well
        tickers = "BTC-USD ETH-USD USDT-USD BNB-USD USDC-USD XRP-USD ADA-USD SHIB-USD",

        # use "period" instead of start/end
        # valid periods: 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max
        # (optional, default is '1mo')
        period = "max",

        # fetch data by interval (including intraday if period < 60 days)
        # valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo
        # (optional, default is '1d')
        interval = "1d",

        start="2020-01-01",

        end="2022-02-20",

        # group by ticker (to access via data['SPY'])
        # (optional, default is 'column')
        group_by = 'ticker',

        # adjust all OHLC automatically
        # (optional, default is False)
        auto_adjust = True,

        # download pre/post regular market hours data
        # (optional, default is False)
        prepost = True,

        # use threads for mass downloading? (True/False/Integer)
        # (optional, default is True)
        threads = True,

        # proxy URL scheme use use when downloading?
        # (optional, default is None)
        proxy = None
    )

# yf.pdr_override() # <== that's all it takes :-)
# data = pdr.get_data_yahoo("BTC-USD ETH-USD USDT-USD BNB-USD USDC-USD XRP-USD ADA-USD SHIB-USD", start="2020-01-01", end="2022-02-20")

print (data)
data.to_csv('yahoo_data.csv')
# data.to_csv (r'export_dataframe.csv', index = False, header=True)

