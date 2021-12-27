import { createContext, useState, useEffect } from "react";
import { auth, db } from "../Firebase/firebaseApp";
import {onAuthStateChanged} from 'firebase/auth'
import { doc, onSnapshot, setDoc } from "firebase/firestore";

const UserContext = createContext()

const UserProvider = ({children})=>{
    
    const [user,setUser] = useState(null)
    const [watchlist, setWatchlist]= useState([])

    useEffect(() => {

        const isThereUser = () =>{
            onAuthStateChanged(auth, (user) => {
                if (user) {
                 setUser(user)
                 
                } else {
                  setUser(null)
                }
              });
              
        }

        isThereUser()
          
    }, [])

    useEffect(()=>{
        if(user){
            const coinsRef=doc(db,"watchlist",user.uid)
            const copyWatchlist =()=>{
                onSnapshot(coinsRef,coin=>{
                    if(coin.exists()) setWatchlist(coin.data().coins)
                    else console.log('No hay elementos')
                })
            }

            copyWatchlist()
            //console.log(user.uid)
        }

    },[user])

    const handleAddCoin = async (currency,setAlert)=>{
        const coinRef=doc(db,'watchlist',user.uid)
        try{
            await setDoc(coinRef,{coins:watchlist? [...watchlist,currency]: [currency]})
            setAlert({
                open:true,
                message:`${currency} add to watchlist`,
                type:'success'
            })

        }catch(error){
            setAlert({
                open:true,
                message:error.message,
                type:'success'
            })
        }
    }

    const handleRemoveCoin = async (currency,setAlert)=>{
        const coinRef=doc(db,'watchlist',user.uid)
        try{
            await setDoc(coinRef,
                {coins:watchlist.filter(el=>el!==currency)},
                {merge:'true'}
                )
                setAlert({
                    open:true,
                    message:`${currency} remove from watchlist`,
                    type:'success'
                })

        }catch(error){
            setAlert({
                open:true,
                message:error.message,
                type:'success'
            })
        }
    }


    const data = {user, setUser, watchlist, handleAddCoin,handleRemoveCoin}

    return(
        <UserContext.Provider value={data}>{children}</UserContext.Provider>
    )

}

export {UserContext}

export {UserProvider}