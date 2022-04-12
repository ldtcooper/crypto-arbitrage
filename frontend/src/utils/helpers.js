export function toTitleString(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export const currencies = ['ETH', 'LTC', 'LUNA', 'ADA', 'DOT', 'BTC'];

const tickerConversion = {
    'ETH': 'Ethereum',
    'LTC': 'Litecoin',
    'LUNA': 'Terra',
    'ADA': 'Cardano',
    'DOT': 'Polkadot',
    'BTC': 'Bitcoin',
};

const exchangeConversion = {
    'binance': 1,
    'boinbase': 2,
    'huobei': 3,
    'kraken': 4,
    'ftx': 5,
};

export function tickerToName(ticker) {
    return tickerConversion[ticker];
}

export function exchangeToId(exchange) { 
    return exchangeConversion[exchange];
}

async function makeRequest(route, body) {
    const res = await fetch(`http://localhost:5000/${route}`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
    });
    return res.json();
}

export async function fetchArbitrage(body) {
    return makeRequest('arbitrage', body);
}

export async function fetchHistory(body) {
    return makeRequest('history', body);
}

