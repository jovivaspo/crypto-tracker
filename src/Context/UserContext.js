import { createContext, useState, useEffect } from "react";
import { auth } from "../Firebase/firebaseApp";
import {onAuthStateChanged} from 'firebase/auth'

const UserContext = createContext()

const UserProvider = ({children})=>{
    
    const [user,setUser] = useState(null)

    useEffect(() => {

        const isThereUser = () =>{
            onAuthStateChanged(auth, (user) => {
                if (user) {
                 setUser(user.uid)   
                } else {
                  setUser(null)
                }
              });
              
        }

        isThereUser()
          
    }, [])


    const data = {user, setUser}

    return(
        <UserContext.Provider value={data}>{children}</UserContext.Provider>
    )

}

export {UserContext}

export {UserProvider}