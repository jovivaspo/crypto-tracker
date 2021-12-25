import { auth } from "./firebaseApp";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AlertContext } from "../Context/AlertContext";
import React, {useContext} from 'react'

const useAuthentication =()=>{

    const {alert, setAlert} = useContext(AlertContext)

    const handleSingIn = async (form) => {
    
        const { email, password, comfirmPassword } = form
       
    
        if (password !== comfirmPassword) {
            alert('Passwords do not match')
            return false
        }
    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               console.log(userCredential.user)
               setAlert({
                   open:true,
                   message:`Sign In. Welcome ${userCredential.user.email}`,
                   type:'success'
               })
            })
            .catch((error) => {
                setAlert({
                    open:true,
                    message:error.message,
                    type:'error'
                })
            });
    
    
    }
    
    const handleLogin = async (form) => {
    
        const { email, password } = form
    
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAlert({
                    open:true,
                    message:`Login. Welcome ${userCredential.user.email}`,
                    type:'success'
                })
            })
            .catch((error) => {
                setAlert({
                    open:true,
                    message:error.message,
                    type:'error'
                })
            });
    }
    
    
    const handleLogOut = ()=>{
        signOut(auth)
        setAlert({
            open:true,
            message:`Log Out. See you soon`,
            type:'success'
        })
    }
    
    
   return { handleLogin, handleSingIn, handleLogOut }
    
}

export default useAuthentication


