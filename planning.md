# Planning
## Frontend
### Technologies
- React
- Redux
- Recharts
- MUI
- create-react-app

### Design
This will be a fairly simple app design wise. It will have two main pages: one for the current arbitrage data and one for historical data. The main user interaction will be inputting request data into fields: the currency, the exchanges, and (for historical data) the date range.

You can access a wireframe of this design [here](https://lucid.app/lucidchart/08705157-421c-45b3-8788-79ed5dcb74e7/edit?invitationId=inv_13491946-1028-4370-aa29-3c144bbea015).

### Components

Once we are set on a technology we can break this down further, but we will likely want the following components:
- Dropdown (for currency select)
- Multiple check boxes (for currency/exchange select)
- Double slider (for date range select)
- Header
- Tab bar (for navigation, will live in the header)
- Table (for data display)
- Multi Line chart (for historical data)

### Routes
We will want to have two main frontend routes. Since the main attraction will be the arbitrage tool, we can probably break them down like so:
- `/`: arbitrage
- `/history`: historical data

## Backend
### Technologies
- Flask
- Some DB interaction library

We can use the mini Amazon project to see what kinds of libraries we'll need.

### Routes
We will probably want the following backend routes (i.e. API endpoints):
- `/`: delivers frontend to the user (`GET`)
- `/arbitrage?currency=<currency>&exchanges=<exchange,exchange>`: Delivers the current arbitrage data for a currency and list of exchanges
- `/history?currency=<currency>&exchanges=<exchange,exchange>&start=<start>&end=<end>`: delivers historical data for a currency and list of exchanges between two dates

## Database
### Technology
PostgreSQL

### Tables
It seems like we will need three tables: Rates , Currency, and Exchanges. Exchanges should be broken off to avoid storing redundant strings in row after row and will decrease the amount of data we have to store slightly.


## Scraping
We were able to find public APIs for the following cryptocurrency exchanges:
- [Binance](https://github.com/binance-us/binance-official-api-docs/blob/master/rest-api.md)
- [FTX](https://docs.ftx.com/#rest-api)
- [Coinbase](https://developers.coinbase.com/docs/wallet/guides/price-data)
- [Kraken](https://docs.kraken.com/rest/#section/Example-API-Clients)
- [Huobei Global](https://huobiapi.github.io/docs/spot/v1/en/#market-data)

According to [CoinMarketCap](https://coinmarketcap.com/rankings/exchanges/) these are the five largest exchanges by [trading volume](https://www.investopedia.com/terms/v/volumeoftrade.asp). 

Additionally, it looks like Coinbase has a Python library to facilitate access to their API.