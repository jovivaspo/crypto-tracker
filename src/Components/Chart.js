import { Button, CircularProgress, Container, makeStyles, Typography } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import React from 'react'
import { useParams } from 'react-router-dom'
import { chartDays } from '../config/data'
import { useChart } from '../Hooks/useChart'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '55%',

        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },

    },

    containerButton: {
        display: 'flex',
        justifyContent: 'center',
        gap: 10,
        margin: 20,
    },

    button: {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.primary.main,

        [theme.breakpoints.down('xs')]:{
            fontSize:10,
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

        '&:hover': {
            backgroundColor: theme.palette.text.secondary,
            color: theme.palette.text.primary,
        }

    },


}))

const Chart = () => {
    const { id } = useParams()
    const { loading, historicalData, day, coin, handleDay } = useChart(id)
    const classes = useStyles()

    console.log(day)
    console.log(historicalData)

    return (
        <Container className={classes.container}>

            {loading ? <CircularProgress align='center' style={{ display: 'block', margin: '0 auto', marginTop: 20, }} color='secondary' /> :
                <>
                    <div className={classes.containerButton}>
                        {chartDays.map(el => {
                            return (
                                <Button className={classes.button} variant='contained' onClick={handleDay} data-value={el.value} >{el.label}</Button>
                            )
                        })}
                    </div>
                    <Line data={{
                        labels: historicalData.map(coin => {
                            let date = new Date(coin[0])
                            let time = date.getHours > 12 ?
                                `${date.getHours() - 12} : ${date.getMinutes()} PM` :
                                `${date.getHours()} : ${date.getMinutes()} AM`
                            return day === 1 ? time : date.toLocaleDateString()
                        }),
                        datasets: [
                            {
                                data: historicalData.map((coin) => coin[1]),
                                label: `Price (Past ${day} Days) in ${coin}`,
                                borderColor: '#EEBC1D'
                            }
                        ],

                    }}

                        options={{
                            elements: {
                                point: {
                                    radius: 1,
                                }
                            }
                        }}

                    />



                </>

            }

        </Container>
    )
}

export default Chart
