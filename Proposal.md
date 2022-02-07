# Project Proposal

## The Problem
Getting into cryptocurrency daytrading starting out pretty rough? Wondering how to make a profit by buying and selling crypto? The best way to do this, with the appropriate hardware, is to do arbitrage. Arbitrage [1] is when you buy an asset at a certain price in one marketplace and sell it for a profit in another marketplace. The goal of our app is to display opportunities for arbitrage by compiling different prices from different cryptocurrency marketplaces.

## The Data Solution & Scope
This project will clearly involve data management to scrape, clean, store, and retrieve the data from the cryptocurrency marketplaces. It is important since it may make cryptocurrency marketplaces even more accessible and thus provide easier usage to people who are trying to learn about crypto. 
## The Basic Features
We plan to create a user portal in which you can search/add the currencies you wish to look at and compare, then display the various prices and some statistics from each marketplace for each cryptocurrency selected. 

Additionally, we will have scheduled scraping so that the data can be updated periodically, showing users multiple potential arbitrage opportunities throughout the day. Thus the four basic features will be:

  1. Database: This is where we will store the crypto data we gather from our sources, and where we will load it from when accessing it. In all likelihood this will use Postgres.
  2. Data Gathering: We will need to have several scripts to gather the data from the marketplaces we will watch. These will either call the markets' APIs or scrape data directly from their websites. This is likely to be done in Python. In the case of scraping data, we will likely be using technologies/libraries like Selenium and BeautifulSoup.
  3. Current Prices: The user will be able to select multiple currencies and markets and compare them on the frontend. This will fetch the selected subset of recent data from our database and display it on the frontend.
  4. Historical Data: In addition to recent prices, the user will be able to view tables and charts of historical arbitrage opportunities. 

These two last points will rely on two additional technical components. We will need a backend to moderate between the database and the users' requests. This will likely be Python, possibly Flask or Django. 

Addtionally, we will need a frontend to actually display the data. This will obviously be based on HTML/CSS/JS. However, if we choose to make the site dynamic, we will likely be using a JavaScript framework such as React/Redux to manage the frontend, as well as a charting library like D3.js for data visualization.

## The Stretch Goals/Bonus Features
To improve our project further, we want to make:

  1. User accounts: ability to log in and out, possibly using OAuth.
  2. Saving persistent watchlists: allowing each user to save their favorite sets of currencies and marketplaces to return to.
  3. Benchmarking historical displays with other financial indices (S&P, risk-free rate like T-bonds).
  4. Scrape and display news articles pertaining to crypto/finance.

## Survey of previous work
There are numerous studies analyzing arbitrage opportunities in cryptocurrency markets in the literature. For example, Markov and Schoar (2020) showed that the price of cryptocurrencies depends on local markets, and this variety created arbitrage opportunities on an hourly or daily basis. [Coinmarketcap.com](https://coinmarketcap.com/) one of the world's most trusted & accurate sources for the crypto market described the reasons for price differences as: market inefficiency, low-volume exchanges, and different volumes of supply and demands of assets

As a result of the prices differences between crypto assets and marketplaces, traders seek different approaches to make a profit by buying at lower prices and selling at higher ones. However, the time between transactions and the transaction speed are important problems with the process, as one could potentially see an arbitrage opportunity which dissappears by the time their transactions could run. Therefore, traders and market makers use bots and trading algorithms to manage high-frequency transactions in milliseconds. With that, there are some tradeoffs, risks, and limits to creating an infrastructure to come up with high-frequency transactions.

One of the important limitations is the transaction fees of the markets. In other words, it may not be worth making a transaction between two markets because transaction fees may be higher than your expected profit (Boonpeam et al, 2021).

Secondly, lack of speed of database systems can be an issue for high-speed transactions. To compare thousands of the prices in dozens of markets in milliseconds makes this process very challenging. Moreover, there are some limitations to sending too many queries to the individual markets. Additionally, one may need to use the APIs of each market maker, which can cause issues with the integrity of ones system if the inputs are not correctly formatted and validated.

To sum up the current literature: price differences between crypto assets in different markets offer great opportunities for profit, although there are some limitations and challenges including creating high-frequency infrastructure, sourcing data, and ensuring arbittrage opportunities can actually lead to profits. Our project will provide a database system to show the arbitrage opportunities and track those on a historical basis rather than making a transaction.

Previous work such as Pionex, Coinrule, Bitsgap, Cryptohopper are platforms that allow users to look at market arbitrage opportunities and consist of bots that can perform trading. These sites update their arbitrage database based on data from third party sources that scan data across multiple sources such as CoinMarketCap. This data however, may not always be [accurate](https://www.forbes.com/sites/annacorradi/2019/07/23/has-top-cryptocurrency-website-coinmarketcap-completely-given-up-on-data-accuracy/?sh=37a42a9772d9). The most accurate way to compare arbitrage opportunities is to look at data directly from the markets. A practical implementation of this method is hard due to its lack of scalability. Our application aims to provide arbitrage opportunities across various markets for free and use both market data and third party sources to provide this information so that users can make a more informed decision.  

## Refrences
[1] Varian, Hal R. "The arbitrage principle in financial economics." Journal of Economic Perspectives 1.2 (1987): 55-72.

[2] Makarov, Igor, and Antoinette Schoar. "Trading and arbitrage in cryptocurrency markets." Journal of Financial Economics 135.2 (2020): 293-319.

[3] How to Benefit From Crypto Arbitrage. https://coinmarketcap.com/ Accessed 7 Feb 2022.

[4] Boonpeam, Naratorn, Warodom Werapun, and Tanakorn Karode. "The arbitrage system on decentralized exchanges." 2021 18th International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Technology (ECTI-CON). IEEE, 2021.

[5] Corradi, Anna. “Has Top Cryptocurrency Website CoinMarketCap Completely given up on Data Accuracy?” Forbes, Forbes Magazine, 23 July 2019, https://www.forbes.com/sites/annacorradi/2019/07/23/has-top-cryptocurrency-website-coinmarketcap-completely-given-up-on-data-accuracy/?sh=37a42a9772d9. 

[6] “Crypto Arbitrage Guide - What It Is and How to Find It - algotrading101 Blog.” Quantitative Trading Ideas and Guides - AlgoTrading101 Blog, 14 May 2021, https://algotrading101.com/learn/crypto-arbitrage-guide/. 
