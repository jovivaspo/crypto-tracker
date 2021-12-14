import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
import { useTrending } from '../Hooks/useTrending';
import { numberWithCommas } from '../Services/numWithCommas';
/*IMPORTANTE: SE DEBE IMPORTAR LOS ESTILOS DE LA BIBLIOTECA ALICE CAROUSEL EN INDEX.JS: import 'react-alice-carousel/lib/alice-carousel.css';*/



const useStyles = makeStyles((theme) => ({
    carousel:{
      
        display:'flex',
        flexDirection:'row',
        alignItems:'center',

        height:"50%",
        
        marginTop:20
      
    },
    
    carouselItem: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        cursor:'pointer',
        textTransform:'uppercase',
      
        

    },

    carouselData:{
        color:theme.palette.text.primary,
        fontSize:12,
        fontWeight:'bold',
    },

    carouselImg:{
        [theme.breakpoints.down('sm')]:{
            height:'40px'
        }
    }
}))

const Carousel = () => {

    const { trending, loading } = useTrending()

    const classes = useStyles()

    const responsive = { 
        0: { items: 2 },
        512: { items: 4 }
    }

  
     const items = trending.map(el => {
         let profit = el.price_change_percentage_24h > 0
            return (<Link  className={classes.carouselItem} to={`coin/${el.id}`}>
                <img className={classes.carouselImg} src={el.image}
                    alt={el.alt}
                    height="80"
                    style={{marginBottom:10}}/>
                    <span className={classes.carouselData}>{el.symbol}</span>
                    <span>{profit? <span style={{color:'green', fontWeight:'bold'}}> + {numberWithCommas(el.price_change_percentage_24h.toFixed(2))}%</span> :
                    <span style={{fontWeight:'bold', color:'red'}}>{numberWithCommas(el.price_change_percentage_24h.toFixed(2))}%</span>}</span>

            </Link>)
        })

     

    
    return (
     
            <div className={classes.carousel}>
                <AliceCarousel mouseTracking infinite autoPlayInterval={1000} animationDuration={1500}
           disableDotsControls responsive={responsive} autoPlay disableButtonsControls items={items}/>
            </div>
            
    )

}

export default Carousel
