import {useState,useEffect, useContext} from 'react'
import { CoinList} from '../config/api'
import { CoinContext } from '../Context/CoinContext'
import {getData} from '../Services/getData'

const useTable = ()=>{
    const [search,setSearch] = useState('')
    const [coinList,setconList] = useState([])
    const [loading,setLoading] = useState(false)
    const [page,setPage] = useState(1)
    const {coin, symbol} = useContext(CoinContext)

    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }



    const handleSearchCoin=()=>{
        return coinList.filter(el=> el.name.toLowerCase().includes(search.toLowerCase()) || el.symbol.toLowerCase().includes(search.toLowerCase()))
    }

    const handlePagination=(e,value)=>{
        setPage(value)
        window.scroll(0,450)
    }

    useEffect(()=>{
        setLoading(true)
       getData(CoinList(coin))
       .then(res=>{
        //console.log(res)
        const datos = res.map(el=>{
           return{
               id:el.id,
               image:el.image,
               name:el.name,
               symbol:el.symbol,
               price_change_percentage_24h:el.price_change_percentage_24h,
               current_price:el.current_price,
               market_cap:el.market_cap,
               circulating_supply:el.circulating_supply,
               total_supply:el.total_supply,

           }
        })
        setconList(datos)
        setLoading(false)
       })



      
    },[coin,search,page])

    return {search, setSearch, coinList, loading, search, coin, symbol, handleSearch, handleSearchCoin, page, handlePagination}
}

export {useTable}