import React from 'react'
import { Box, Button, makeStyles, TextField } from '@material-ui/core'
import { useForm } from '../Hooks/useForm'


const useStyle = makeStyles(() => ({
    singin: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        padding: 10
    },
    input: {
        marginBottom: 16,

    }
}))

const SignIn = ({handleClose}) => {

    const classes = useStyle()

    const initialForm={
        email:'',
        password:'',
        confirmPassword:''
    }

    const {form, handleChange, handleSubmit} = useForm(initialForm, handleClose)

    return (
        <Box >
            <form className={classes.singin} autoComplete='off' onSubmit={handleSubmit}>
                <TextField className={classes.input} name='email' type='email' placeholder='Input Email' value={form.email} onChange={handleChange} required/>
                <TextField className={classes.input} name='password' type='password' placeholder='Input Password' value={form.password} onChange={handleChange} required/>
                <TextField className={classes.input} name='confirmPassword' type='password' placeholder='Confirm Password' value={form.confirmPassword} onChange={handleChange} required/>
                <Button type='submit' variant='contained' style={{ fontWeight: 600 }}>Sing In</Button>
            </form>

        </Box>
    )
}

export default SignIn
