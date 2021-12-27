import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { UserContext } from '../Context/UserContext';
import useAuthentication from '../Firebase/useAuthentication';
import {Link} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import { AlertContext } from '../Context/AlertContext';

const useStyles = makeStyles((theme)=>({
 panelUser:{
     width:250,
     height:'100vh',
     display:'flex',
     flexDirection:'column',
     justifyContent:'space-around',
     padding:20,
     gap:20,
     alignItems:'center',
    
     
 },
 panelUserImg:{
     width:150,
     height:150,
     borderRadius:100,
     border:'solid 1px grey',

 },
 divWatchlist:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding:8,
     width:200,
     minHeight:300,
     overflowY:'scroll',
     backgroundColor:theme.palette.primary.dark,
     
 },
 coinList:{
   display:'flex',
   justifyContent:'space-between',
   width:'95%',
   padding:8,
   backgroundColor:'white',
   color:'black',
   marginBottom:8,
   borderRadius:8,


 }
}));

export default function DrawPerfil() {
  const classes = useStyles();
  const [state, setState] = React.useState({
   right: false,
  });
  const {user} = useContext(UserContext)
  const {watchlist, handleRemoveCoin} = useContext(UserContext)
  const {setAlert} = useContext(AlertContext)
  const {handleLogOut} = useAuthentication()

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  console.log(user)


  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          {user.photoURL? <img onClick={toggleDrawer(anchor, true)} src={user.photoURL} alt={user.email}/> :
            <Button onClick={toggleDrawer(anchor, true)} variant='contained' style={{ fontWeight: 'bold', fontSize: 14, marginLeft: 5, marginRight: 5 }} >Perfil</Button>
          }
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
           <div className={classes.panelUser}>
               <div>
                <img className={classes.panelUserImg} src={user.photoURL? user.photoURL : 'https://img2.freepng.es/20180325/wae/kisspng-business-google-account-organization-service-avatar-5ab752c6a54db0.2719189215219637186771.jpg' } alt={user.email}/>
                <h4>{user.email}</h4>
               </div>
               <div>
                   <p style={{textAlign:'center', margin:8}}>WatchList</p>
                   <div className={classes.divWatchlist}>
                     {  watchlist.map(coin=>{
                       return(
                        <div className={classes.coinList}>
                          <Link to={`/crypto-tracker/coin/${coin}`} style={{fontSize:12, fontWeight:600, color:'black'}}>{coin}</Link>
                          <DeleteIcon style={{fontSize:14, color:'black', cursor:'pointer'}} onClick={()=>handleRemoveCoin(coin,setAlert)}/>
                          </div>
                       )
                     })
                      
                     }
                   </div>
               </div>
                <Button onClick={handleLogOut} variant='contained' style={{ fontWeight: 'bold', fontSize: 14, marginLeft: 5, marginRight: 5}} fullWidth>Log Out</Button>
           </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
