import {useState,useEffect,useContext} from 'react'
import { HistoricalChart } from '../config/api'
import { CoinContext } from '../Context/CoinContext'
import { getData } from '../Services/getData'

const useChart = (id) =>{

    const [historicalData,setHistorical] = useState([])
    const [loading,setLoading] = useState(true)
    const [day,setDay] = useState(1)
    const {coin,symbol} = useContext(CoinContext)

    const handleDay = (e)=>{
        !e.target.dataset.value?    setDay(e.target.parentNode.dataset.value)  :  setDay(e.target.dataset.value)
    }

    useEffect(()=>{

        getData(HistoricalChart(id,day,coin))
        .then(res=>{
            console.log(res)
            setHistorical(res.prices)
            setLoading(false)
        })

    },[coin,day])

    return {loading,historicalData,day,coin,handleDay}

}

export {useChart}