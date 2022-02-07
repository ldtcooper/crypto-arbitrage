# The Problem
Getting into cryptocurrency daytrading starting out pretty rough? Wondering how to make a profit by buying and selling crypto? The best way to do this, with the appropriate hardware, is to do arbitrage. Arbitrage [1] is when you buy an asset at a certain price in one marketplace and sell it for a profit in another marketplace. The goal of our app is to display opportunities for arbitrage by compiling different prices from different cryptocurrency marketplaces.

# The Data Solution & Scope
This project will clearly involve data management to scrape, clean, store, and retrieve the data from the cryptocurrency marketplaces. It is important since it may make cryptocurrency marketplaces even more accessible and thus provide easier usage to people who are trying to learn about crypto. 

Our project is a semi-standart term prject of the course of [Database Systems/CompSci 516](https://courses.cs.duke.edu/spring22/compsci516/) at Duke University. A semi-standart project is basically developed by team members from project idea to end product. 

# The Basic Features
We plan to create a user portal in which you can search/add the currencies you wish to look at and compare, then we display the various prices and some statistics from each marketplace for each cryptocurrency selected. Additionally, we will have live scraping so that the data can be updated regularly, so you see the various arbitrage opportunities throughout the day. Thus the four basic features will be:

  1. Create database with user view for different cryptocurrency marketplaces
  2. Scrape and update database, hopefully at least once per hour
  3. Display cryptocurrencies in each marketplace to see current arbitrage opportunities and various important statistics
  4. Display historical data on each cryptocurrency using previous datapoints

# The Stretch Goals/Bonus Features
To improve our project further, we want to make:

  1. User accounts
  2. Saving persistent watchlists
  3. Benchmarking historical displays with indices (S&P, risk-free rate like T-bonds)
  4. Scrape and display news articles pertaining crypto/finance

# Survey of previous work
There are numeruous studies in analyzing arbitrage opportunities in cryptocurrency markets in the literature. For example, Markov and Schoar (2020) showed that price of cryptocurrencues depended on the countries and local markets and this variaty caused the arbitrage opportunities hourly basis or daily basis. [coinmarketcap.com](https://coinmarketcap.com/) one of the world's most trusted & accurate source for crypto market described the reasons of price differences as market inneficiency, low-volume exchanges and different volumes of supply and demands of assets. 

As a results of the prices differences of the crypto assets, traders seek different approaches to make profit by buying lower price and selling higher price. However, the time and speed between transactions are another important problem during the process. Therefore, traders or market makers use bots or trading algorithms to manage high-frequency transactions in miliseconds. With that, there are some tradeoffs, risks, and limits to create a infrasturucture to come op with the high-frequency transactions.

One of the limitation is transaction fees of the markets. In other words, it may not worth to make a transaction between two market because transaction fees may be higher than your expected profit Boonpeam et all (2021).

Secondly, lack of speed of database systems for high speed transactions. To compare thousands of the prices in numbers of markets in miliseconds makes this process very challenging. Moreover, there are some limitations to send too much queryies to the individual markets. Additionaly, you may need to use APIs of each market maker it may be a problem of the integrity of your system. 

To sum up, according to the current literature, price differences between cyrpto assets in different markets offers great profit opportunities although there are some limitations and challanges. Our project will provide a database system to show the arbitrage opportunities and track those on historical bais rather than making transaction. 

# Refrences
[1] Varian, Hal R. "The arbitrage principle in financial economics." Journal of Economic Perspectives 1.2 (1987): 55-72.

[2] Makarov, Igor, and Antoinette Schoar. "Trading and arbitrage in cryptocurrency markets." Journal of Financial Economics 135.2 (2020): 293-319.

[3] How to Benefit From Crypto Arbitrage. https://coinmarketcap.com/ Accessed 7 Feb 2022.

[4] Boonpeam, Naratorn, Warodom Werapun, and Tanakorn Karode. "The arbitrage system on decentralized exchanges." 2021 18th International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Technology (ECTI-CON). IEEE, 2021.
