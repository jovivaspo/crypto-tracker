import { auth } from "./firebaseApp";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AlertContext } from "../Context/AlertContext";
import React, {useContext} from 'react'
import { useNavigate } from "react-router-dom";

const useAuthentication =()=>{

    const {alert, setAlert} = useContext(AlertContext)
    const navigate = useNavigate()


    const handleSingIn = async (form) => {

       console.log('SiGNiN')
    
        const { email, password, confirmPassword } = form
       
    
        if (password !== confirmPassword) {
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

        console.log('LOGIN')
    
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
        navigate('/crypto-tracker')
       
    }
    
    
   return { handleLogin, handleSingIn, handleLogOut }
    
}

export default useAuthentication


