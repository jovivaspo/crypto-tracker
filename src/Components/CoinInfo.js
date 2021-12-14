import React from 'react'
import {Typography, makeStyles, Container, Divider} from '@material-ui/core'
import CoinInfoData from './CoinInfoData'
import Chart from './Chart'

const useStyles = makeStyles((theme)=>({
    container:{
        display:'flex',
        justifyContent:'center',
        marginTop:20,

        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            justifyContent:'center'
        }
    }   
}))

const CoinInfo = () => {

    const classes = useStyles()
   
    return (
        <div className={classes.container}>
            <CoinInfoData/>
            <Divider/>
            <Chart/>
        </div>
    )
}

export default CoinInfo
