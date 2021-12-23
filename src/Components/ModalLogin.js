import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button,AppBar, Tabs, Tab } from '@material-ui/core';
import Login from './Login';
import SignIn from './SignIn';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    paper: {
        backgroundColor: 'transparent',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 400
    },



}));

export default function ModalLogin() {
    const classes = useStyles();
  
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

   

    return (
        <div>
            <Button variant='contained' style={{ fontWeight: 'bold', fontSize: 14, marginLeft: 5, marginRight: 5 }}
                onClick={handleOpen}>Login</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <AppBar position="static">
                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant='fullWidth'>
                                <Tab label="Login"  style={{fontWeight:600}}/>
                                <Tab label="Sing In"  style={{fontWeight:600}} />
                            </Tabs>
                            {value === 0 && <Login handleClose={handleClose}/>}
                            {value === 1 && <SignIn handleClose={handleClose}/>}
                        </AppBar>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}