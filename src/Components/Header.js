import React, {useContext} from 'react'
import { AppBar, makeStyles, Toolbar, Typography, Select, MenuItem, IconButton } from '@material-ui/core'
import { CoinContext } from '../Context/CoinContext'
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import {useNavigate} from 'react-router-dom'



const useStyles = makeStyles(() => ({
    appbar: {
        width: '100vw',
    },

    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',

    },

    title: {
        fontWeight: 700,
        flexGrow: 1,
        cursor:'pointer'
    },

    select: {
        width: 90,
        height: 40,
        marginLeft: 15,
        fontSize:12,
        
    },

    icon:{
        marginLeft:10
    }
}))


const Header = ({theme, handleTheme}) => {

    const navigate = useNavigate()

    const classes = useStyles()

    const {coin, handleCoin} = useContext(CoinContext)

    console.log(coin)

    return (
        <AppBar position='static' color='transparent' className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title}  onClick={()=>navigate('/crypto-tracker')}>Crypto Tracker</Typography>
                <Select variant='outlined' color='secondary' className={classes.select} onChange={handleCoin}>
                    <MenuItem value={'usd'} style={{fontSize:12}}>USD</MenuItem>
                    <MenuItem value={'eur'} style={{fontSize:12}}>EUR</MenuItem>
                </Select>
                <IconButton  className={classes.icon} onClick={handleTheme}>
                    {
                        theme === 'dark'? (<Brightness7Icon/>) : (<Brightness3Icon/>) 
                    }
                </IconButton>
            </Toolbar>

        </AppBar>
    )
}

export default Header
