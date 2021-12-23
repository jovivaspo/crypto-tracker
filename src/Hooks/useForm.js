import React, {useState} from 'react'


const useForm = (initialForm, handleClose)=>{

    const [form,setForm] = useState(initialForm)


    const handleChange = (e) => {
       
        setForm({...form,[e.target.name]:e.target.value})

        console.log(form)
    }

   const  handleSubmit = (e)=>{
        e.preventDefault()
        handleClose()
        alert('Enviando')
      
    }

    return {form, handleChange, handleSubmit}
}

export {useForm}