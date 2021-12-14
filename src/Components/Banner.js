import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import Carousel from './Carousel'

const useStyles = makeStyles((theme) => ({
    banner:{
       /* background: '#212121', /* fallback for old browsers */
      /*  background: '-webkit-linear-gradient(to top, #212121, #414345)',  /* Chrome 10-25, Safari 5.1-6 */
      /*  background: 'linear-gradient(to top,  #212121, #414345)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    },
    container: {

        display: 'flex',
        flexDirection: 'column',
        paddingTop: '25',
        justifyContent: 'center',
        alignContent: 'center',


        height: 260,

      

        [theme.breakpoints.down('sm')]: {
            height: 200,
        }

    },

    title: {
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            fontSize: 30,
        }

    },

    subtitle: {

        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        }

    },

    tagline: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',




    }
}))

const Banner = () => {


    const classes = useStyles()

    return (
        <div className={classes.banner}>
            <Container className={classes.container}>
                <div className={classes.tagline}>
                    <Typography variant='h4' align='center' className={classes.title}>Crypto Tracker</Typography>
                    <Typography variant='subtitle1' align='center' className={classes.subtitle}>Crypto Tracker: Get All The Info Of Your Favourite CryptoCurrency </Typography>
                    <Carousel />
                </div>

            </Container>
        </div>
    )
}

export default Banner
