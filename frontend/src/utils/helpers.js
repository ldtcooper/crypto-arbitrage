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
    'coinbase': 2,
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

const formatEids = (eid) => eid.join(',');

export async function fetchArbitrage({eid, cid}) {
    const res = await fetch(`/arbitrage?eid=${formatEids(eid)}&cid=${cid}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    return res.json();
}

export async function fetchHistory({eid, cid, startDate, endDate}) {
    const res = await fetch(`/history?eid=${formatEids(eid)}&cid=${cid}&startDate=${startDate}&endDate=${endDate}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    return res.json();
}

export async function fetchDates() {
    const res = await fetch(`/dates`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    return res.json();
}

export function formatHistory(history) {
    const numExchanges = history.length;
    const histLength = history[0].length;
    const output = [];
    for (let i = 0; i < histLength; i++) {
        for (let j = 0; j < numExchanges; j++) {
            const { date, exchange, rate } = history[j][i];
            const currentVal = { date: date, [exchange]: parseFloat(rate)};
            const outputChunk = output[i];
            if (outputChunk) {
                const newEntry = Object.assign(output[i], currentVal)
                debugger
                output[i] = newEntry;
            } else {
                output[i] = currentVal;
            }
        }
        
    }
    

    return output;
}

