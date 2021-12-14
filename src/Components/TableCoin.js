import { Container, makeStyles, TableContainer, TextField, Typography, Table, TableHead, TableRow, TableCell, TableBody, LinearProgress } from '@material-ui/core'
import React from 'react'
import {useTable} from '../Hooks/useTable'
import {numberWithCommas} from '../Services/numWithCommas'
import {useNavigate} from 'react-router-dom'
import {Pagination} from '@material-ui/lab'

const useStyles = makeStyles((theme)=>({
    table:{
       marginTop:25,
      
    },

    tableHead:{
        fontWeight:'bold',
        fontSize:16,

        [theme.breakpoints.down('xs')]:{
            fontSize:12
        }
    },

    tableBodyCell:{
        fontWeight:'bold',
        cursor:'pointer',
        [theme.breakpoints.down('xs')]:{
            fontSize:12,
            fontWeight:'normal',
            padding:'10px 2px'
        }
    }

   
}))

const TableCoin = () => {
    const {search, loading , coinList, coin, symbol, page, handleSearch, handleSearchCoin, handlePagination} = useTable()

    const classes = useStyles()

    let navigate = useNavigate()

    console.log(coinList)

    console.log(search)

    return (
       
       <div style={{width:'100vw'}}>
           <Container align='center'>
               <Typography variant='h5' style={{fontWeight:'bold', margin:20}}>CryptoCurrency Prices by Market Cup</Typography>
                <TextField label="Search..." value={search} onChange={handleSearch} variant='outlined'  style={{width:'100%'}}/>
                { loading? (<LinearProgress/>) : (<TableContainer style={{overflowX:'hidden'}}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow color='secondary' >
                                {
                                    ['Coin','Price', 'price change 24h', 'Mkt Cap'].map(el=>{
                                        return(
                                            <TableCell className={classes.tableHead} style={{
                                            textAlign: el==='Coin'? 'left' : 'center',
                                            }}>{el}</TableCell>
                                        )
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                handleSearchCoin().slice(page*10-10,page*10).map(el=>{
                                    let profit = el.price_change_percentage_24h > 0
                                    return (
                                        <TableRow onClick={()=>navigate(`coin/${el.id}`)}>
                                            <TableCell className={classes.tableBodyCell} style={{display:'flex', alignItems:'center'}} align='left'><img src={el.image} height='40' style={{marginRight:10}}/><span>{el.symbol}</span></TableCell>
                                            <TableCell className={classes.tableBodyCell} align='center'>{numberWithCommas(el.current_price) + ' ' + symbol}</TableCell>
                                            {profit? <TableCell className={classes.tableBodyCell} align='center' style={{color:'green'}}><span>+ {numberWithCommas(el.price_change_percentage_24h.toFixed(2))} %</span></TableCell> :
                                            <TableCell className={classes.tableBodyCell} align='center' style={{color:'red'}}><span>{numberWithCommas(el.price_change_percentage_24h.toFixed(2))} %</span></TableCell>}
                                            <TableCell className={classes.tableBodyCell} align='center'>{numberWithCommas(el.market_cap.toString().slice(0,-6)) + 'M'}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>) }
                <Pagination style={{display:'flex', justifyContent:'center',margin:30}}count={10} onChange={handlePagination}/>
           </Container>
       </div>
    )
}

export default TableCoin
