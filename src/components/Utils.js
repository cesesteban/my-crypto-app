export const name = {
    BTC: "Bitcoin",
    ETH: "Ethereum",
    BNB: 'Binance',
    LTC: 'LITE',
    XRP: 'Ripple',
    LINK: 'LINK',
    UNI: 'Uni-Coin',
    ADA: 'Cardano',
    EOS: 'EOS',
    VET: 'VeChain',
    TRX: 'Tron',
    XLM: 'Stellar',
    THETA: 'Theta',
    FIL: 'FileCoin',
    CRO: 'Crypto',
    BCH: 'Bitcoin-Cash',
    DAI: 'Dai',
    USDT: 'Tether',
    USDC: 'USD-Coin'
}

export const criptoArray = []

for (let key in name) {
    criptoArray.push(key)//guarda el valor de las variables dentro el objeto "name" en criptoArray
}
