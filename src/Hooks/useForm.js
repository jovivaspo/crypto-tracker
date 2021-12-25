import React, {useState} from 'react'
import useAuthentication from '../Firebase/useAuthentication'


const useForm = (initialForm, handleClose)=>{

    const [form,setForm] = useState(initialForm)
    const {handleLogin, handleSingIn} = useAuthentication()


    const handleChange = (e) => {
       
        setForm({...form,[e.target.name]:e.target.value})

    }

   const  handleSubmit = (e)=>{

        e.preventDefault()

        !form.confirmPassword? handleLogin(form)  : handleSingIn(form)
      
        handleClose()
        
      
    }

    return {form, handleChange, handleSubmit}
}

export {useForm}