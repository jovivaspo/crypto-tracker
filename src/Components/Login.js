import React,{useState} from 'react'
import { Box, Button, makeStyles, TextField } from '@material-ui/core'
import { useForm } from '../Hooks/useForm'

const useStyle = makeStyles(()=>({
    singin:{
        display:'flex',
        flexDirection:'column',
        margin:10,
        padding:10
    },
    input:{
        marginBottom:16,

    }
}))

const Login = ({handleClose}) => {
    const initialForm={
        email:'',
        password:'',
      
    }

    const {form, handleChange, handleSubmit} = useForm(initialForm,handleClose)

    const classes = useStyle()
    return (
        <Box >
            <form className={classes.singin} onSubmit={handleSubmit} autoComplete='off'>
            <TextField className={classes.input} name='email' type='email' placeholder='Input Email' value={form.email} onChange={handleChange}/>
            <TextField className={classes.input} name='password' type='password' placeholder='Input Password'value={form.password} onChange={handleChange}/>
            <Button type='submit' variant='contained'style={{fontWeight:600}}>Login</Button>
            </form>
           
        </Box>
    )
}

export default Login
