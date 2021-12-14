import { createContext, useState } from "react";

const CoinContext = createContext()

const CoinProvider = ({children})=>{
    const [coin,setCoin] = useState('usd')
    const [symbol, setSymbol] = useState('$')

    const handleCoin = (e) =>{
        setCoin(e.target.value)
        e.target.value=== 'eur'? setSymbol('€') : setSymbol('$')
        
    }

    const data ={coin, handleCoin, symbol}

    return(
        <CoinContext.Provider value={data}>{children}</CoinContext.Provider>
    )

}

export {CoinContext}

export {CoinProvider}
