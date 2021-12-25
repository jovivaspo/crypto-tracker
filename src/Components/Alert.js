import React,{useContext} from 'react'
import MuiAlert from '@material-ui/lab/Alert'
import { AlertContext } from '../Context/AlertContext'
import { Snackbar } from '@material-ui/core'

const Alert = () => {

    const {alert,setAlert} = useContext(AlertContext)
   
    const handleClose = (e, reason)=>{
        if(reason === "clickaway"){
            return;
        }
        setAlert({open:false})
    }

    return (
       <Snackbar open={alert.open}
       autoHideDuration={3000}
       onClose={handleClose}
       >
           <MuiAlert onClose={handleClose}
           elevation={10}
           variant='filled'
           severity={alert.type}
           >{alert.message}</MuiAlert>
       </Snackbar>
    )
}

export default Alert


