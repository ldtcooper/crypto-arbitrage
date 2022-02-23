# Planning
## Frontend
### Technologies
It seems like we are looking at using React/Redux. Once we settle on that for sure, we can plan this out more.

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
While we had originally discussed Python, I've also seen mentions of Node and PHP in the chat.

#### Python
If we use Python, we will probably want to use either Flask or Django. Django might be easier as it comes with tools for database interaction. Flask is much more bare-bones, so we would need to find a DB interaction library.

#### Node (JavaScript)
If we use Node, we will probably want to use Express. This is on a similar level to Flask, so we would need to find a DB interaction library.

#### PHP
I can't speak much to what we would need for PHP.

### Routes
We will probably want the following backend routes (i.e. API endpoints):
- `/`: delivers frontend to the user (`GET`)
- `/arbitrage?currency=<currency>&exchanges=<exchange,exchange>`: Delivers the current arbitrage data for a currency and list of exchanges
- `/history?currency=<currency>&exchanges=<exchange,exchange>&start=<start>&end=<end>`: delivers historical data for a currency and list of exchanges between two dates

## Database
### Technology
PostgreSQL

### Tables
It seems like we will need at least two tables: Rates and Exchanges. Exchanges should be broken off to avoid storing redundant strings in row after row and will decrease the amount of data we have to store slightly.