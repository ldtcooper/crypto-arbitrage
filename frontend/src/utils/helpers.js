export function toTitleString(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export const currencies = ['ETH', 'LTC', 'LUNA', 'ADA', 'DOT', 'BTC'];

export function tickerToName(ticker) {
    const conversion = {
        'ETH': 'Ethereum',
        'LTC': 'Litecoin',
        'LUNA': 'Terra',
        'ADA': 'Cardano',
        'DOT': 'Polkadot',
        'BTC': 'Bitcoin',
    }

    return conversion[ticker];
}

