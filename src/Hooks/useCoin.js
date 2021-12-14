import  {useState, useEffect, useContext} from 'react'
import { SingleCoin } from '../config/api'
import { CoinContext } from '../Context/CoinContext'
import { getData } from '../Services/getData'

const useCoin =(id)=>{

    const [loading, setLoading] = useState(true)
    const [currency,setCurrency] = useState()
    const [info, setInfo] = useState('general')

    const handleInfo=(e)=>{
       !e.target.dataset.id?    setInfo(e.target.parentNode.dataset.id)  :  setInfo(e.target.dataset.id)
    }
    const {coin} = useContext(CoinContext)
    
    
    useEffect(()=>{
        getData(SingleCoin(id))
        .then(res=>{
            console.log(res)
           
               const data ={
                    id:res.id,
                    rank:res.coingecko_rank,
                    imageLarge:res.image.large,
                    home:res.links.homepage[0],
                    imageSmall:res.image.small,
                    name:res.name,
                    symbol:res.symbol,
                    circulating_suply: res.market_data.circulating_supply,
                    current_price:{
                        eur:res.market_data.current_price.eur,
                        usd:res.market_data.current_price.usd,
                    } ,
                    price_change_percentage_24h:res.market_data.price_change_percentage_24h,
                   
                    market_cap:{
                        eur:res.market_data.market_cap.eur,
                        usd:res.market_data.market_cap.usd,
                    } ,

                    fully_diluted_valuation:{
                        eur:res.market_data.fully_diluted_valuation.eur,
                        usd:res.market_data.fully_diluted_valuation.usd},
                    volumen:{
                        usd:res.market_data.total_volume.usd,
                        eur:res.market_data.total_volume.eur
                    },
                   
                    max_supply: res.market_data.max_supply,
                    sentiment_votes_down_percentage:res.sentiment_votes_down_percentage,
                    sentiment_votes_up_percentage:res.sentiment_votes_up_percentage,
                    description: res.description.en,
                    community_data: res.community_data,
                }
               
               
                setCurrency(data)
                setLoading(false)
            })
    },[id,coin,info])

    console.log(currency)

    return {loading,currency,info,handleInfo}
}

export {useCoin}