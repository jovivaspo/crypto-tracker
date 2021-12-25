import { createContext, useState } from "react";

const CoinContext = createContext()

const CoinProvider = ({children})=>{
    const [coin,setCoin] = useState('usd')
    const [symbol, setSymbol] = useState('$')
    const [user,setUser] = useState(null)

    const handleCoin = (e) =>{
        setCoin(e.target.value)
        e.target.value=== 'eur'? setSymbol('€') : setSymbol('$')
        
    }

    const data ={coin, handleCoin, symbol, user, setUser}

    return(
        <CoinContext.Provider value={data}>{children}</CoinContext.Provider>
    )

}

export {CoinContext}

export {CoinProvider}
