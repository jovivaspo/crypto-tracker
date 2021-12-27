import React, { useContext } from 'react'
import { Typography, makeStyles, Container, Button, CircularProgress, Switch, IconButton } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { useCoin } from '../Hooks/useCoin'
import { CoinContext } from '../Context/CoinContext'
import { numberWithCommas } from '../Services/numWithCommas'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import ReactHtmlParser from 'react-html-parser'
import { SentimentDissatisfied } from '@material-ui/icons'
import {UserContext} from '../Context/UserContext'
import { AlertContext } from '../Context/AlertContext'



const useStyles = makeStyles((theme) => ({

    container: {
        width: '40%',

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            marginBottom:16,
        }
    },

    logo: {
        display: 'block',
        margin: '0 auto',
        marginBottom: 30,


        height: 200,


        [theme.breakpoints.down('md')]: {

            height: 120
        },

        [theme.breakpoints.down('sm')]: {
            height: 70
        }
    },

    containerButton: {
        display: 'flex',
        justifyContent: 'center',
        gap: 10,
        margin: 20,


        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            gap: 5,
            margin: 10,
        }

    },

    button: {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.primary.main,


        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },

        '&:hover': {
            backgroundColor: theme.palette.text.secondary,
            color: theme.palette.text.primary,
        }

    },


    selected: {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.primary.main,
        fontWeight: 'bold',

        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },

        '&:hover': {
            backgroundColor: theme.palette.text.secondary,
            color: theme.palette.text.primary,
        }

    },

    containerInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 50,
    },

    containerInfoMarket: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',


        }

    },

    containerData: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: 'solid thin #ccc',
        marginBottom: 16,
    },

    data: {
        fontWeight: 'bold',
        marginBottom: 8,
        marginRight: 12,
    },

    containerSocial: {
        display: 'flex',
        flexDirection: 'column',

    },

}))

const CoinInfoData = () => {

    const { id } = useParams()
    const classes = useStyles()
    const { currency, loading, info, handleInfo } = useCoin(id)
    const { coin, symbol } = useContext(CoinContext)
    const {user, watchlist, handleRemoveCoin, handleAddCoin} = useContext(UserContext)
    const {setAlert} = useContext(AlertContext)


    return (


        <Container className={classes.container}>

            <Typography variant='h3' align='center' style={{ fontWeight: 'bold', margin: '10px' }}>{id.toUpperCase()}</Typography>
            {loading ? (<CircularProgress align='center' style={{ display: 'block', margin: '0 auto' }} color='secondary' />) : (
                <>
                    <img src={currency.imageLarge} className={classes.logo} />
                    <div className={classes.containerButton}>
                        <Button variant='outlined' data-id='general' onClick={handleInfo} className={info === 'general' ? classes.selected : classes.button}>General</Button>
                        <Button variant='outlined' data-id='market_data' onClick={handleInfo} className={info === 'market_data' ? classes.selected : classes.button}>Market Data</Button>
                        <Button variant='outlined' data-id='social' onClick={handleInfo} className={info === 'social' ? classes.selected : classes.button}>Social</Button>
                        {user && watchlist?.includes(currency.id) && <Button className={classes.button} onClick={()=>handleRemoveCoin(currency.id,setAlert)}>Remove WatchList</Button>}
                        {user && !watchlist?.includes(currency.id) && <Button className={classes.button} onClick={()=>handleAddCoin(currency.id,setAlert)}>Add WatchList</Button>}   
                    </div>

                    <div className={classes.containerInfo}>
                        {
                            (() => {

                                if (info === 'general') {
                                    return (<>
                                        <div style={{ display: 'flex' }}>
                                            <Typography className={classes.data} variant='h6' >Rank: {currency.rank - 1}</Typography>
                                            <Button variant='outlined' className={classes.button} href={currency.home} style={{ width: 100, height: 32, fontWeight: 'bold' }}>WebSite</Button>
                                        </div>
                                        <p>{ReactHtmlParser(currency.description.slice(0, 750)) + '...'}</p>
                                    </>)
                                } else if (info === 'market_data') {
                                    let profit = currency.price_change_percentage_24h > 0
                                    return (
                                        <div className={classes.containerInfoMarket}>
                                            <div className={classes.containerData}>
                                                <Typography className={classes.data} variant='h6'>{
                                                    currency.current_price[coin] ?
                                                        numberWithCommas(currency.current_price[coin].toFixed(2)) + ' ' + symbol :
                                                        'Not found'
                                                }
                                                    <span style={{ color: profit ? 'green' : 'red', fontSize: 14, marginLeft: 10 }}>{
                                                        currency.price_change_percentage_24h ?
                                                            currency.price_change_percentage_24h.toFixed(2) + ' %' :
                                                            'Not Found'
                                                    }</span>
                                                </Typography>
                                            </div>
                                            <div className={classes.containerData}>
                                                <span>Market Cap</span>
                                                <span>{
                                                    currency.market_cap[coin] ?
                                                        numberWithCommas(currency.market_cap[coin]) + ' ' + symbol :
                                                        'Not Found'
                                                }</span>
                                            </div>
                                            <div className={classes.containerData}>
                                                <span>24h Hour Trading Vol</span>
                                                <span>{
                                                    currency.volumen[coin] ?
                                                        numberWithCommas(currency.volumen[coin]) + ' ' + symbol :
                                                        'Not Found'
                                                }</span>
                                            </div>
                                            <div className={classes.containerData}>
                                                <span>Fully Diluted Valuation</span>
                                                <span>{
                                                    currency.fully_diluted_valuation[coin] ?
                                                        numberWithCommas(currency.fully_diluted_valuation[coin]) + ' ' + symbol :
                                                        'Not Found'
                                                }</span>
                                            </div>
                                            <div className={classes.containerData}>
                                                <span>Circulation supply</span>
                                                <span> {
                                                    currency.circulating_suply ?
                                                        numberWithCommas(currency.circulating_suply) :
                                                        'Not Found'
                                                }</span>
                                            </div>
                                            <div className={classes.containerData}>
                                                <span>Total supply</span>
                                                <span>{currency.max_supply ?
                                                    numberWithCommas(currency.max_supply) :
                                                    'Not Found'
                                                }</span>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return <div className={classes.containerSocial}>

                                        <div className={classes.containerData}>
                                            <span>Positive votes</span>
                                            <span><SentimentVerySatisfiedIcon /> {
                                                currency.sentiment_votes_up_percentage ?
                                                    currency.sentiment_votes_up_percentage + ' %' :
                                                    'Not Found'
                                            } </span>
                                        </div>

                                        <div className={classes.containerData}>
                                            <span>Negative votes</span>
                                            <span><SentimentDissatisfied /> {
                                                currency.sentiment_votes_down_percentage ?
                                                currency.sentiment_votes_down_percentage :
                                                'Not Found'
                                            }</span>
                                        </div>

                                        <div className={classes.containerData}>
                                            <span> Reddit Account</span>
                                            <span><RedditIcon /> {currency.community_data.reddit_accounts_active_48h ?
                                                currency.community_data.reddit_accounts_active_48h :
                                                'Not Found'}</span>
                                        </div>

                                        <div className={classes.containerData}>
                                            <span>Twitter followers</span>
                                            <span><TwitterIcon /> {currency.community_data.twitter_followers ?
                                                numberWithCommas(currency.community_data.twitter_followers)
                                                : 'Not Found'}</span>
                                        </div>

                                        <div className={classes.containerData}>
                                            <span>Telegram users</span>
                                            <span> <TelegramIcon /> {currency.community_data.telegram_channel_user_count ?
                                                numberWithCommas(currency.community_data.telegram_channel_user_count) :
                                                'Not found'}</span>
                                        </div>
                                    </div>
                                }

                            })()
                        }
                    </div>


                </>
            )}

        </Container>

    )
}

export default CoinInfoData

/** <img className={classes.logo} src={currency.imageLarge}/>
                <div className={classes.containerButton}>
                    <Button variant='outlined'data-id='general' onClick={handleInfo}>General</Button>
                    <Button variant='outlined' data-id='market_data'  onClick={handleInfo}>Market Data</Button>
                    <Button variant='outlined'data-id='social'  onClick={handleInfo}>Social</Button>
                </div> */