import React, { useState,useEffect,useContext } from "react"
import { Link } from "react-router-dom"
import { TrendingCoins } from "../config/api"
import { CoinContext } from "../Context/CoinContext"
import { getData } from "../Services/getData"

const useTrending = ()=>{
    const [trending, setTrending] = useState([])
    const [loading, setLoading] = useState(false)
    const {coin,symbol} = useContext(CoinContext)

    useEffect(() => {

        setLoading(true)
        getData(TrendingCoins(coin))
        .then(datos=> {
            console.log(datos)
            const datosTrending = datos.map(el=>{
               return{
                   id:el.id,
                   image:el.image,
                   name:el.name,
                   symbol:el.symbol,
                   price_change_percentage_24h:el.price_change_percentage_24h,
                   current_price:el.current_price
               }
            })
            setTrending(datosTrending)
            setLoading(false)})
      
    }, [coin])

    return {trending,loading}
}

export {useTrending}