import { createContext, useState, useEffect } from "react";


const AlertContext = createContext()

const AlertProvider = ({children})=>{
    
    const [alert, setAlert] = useState({
        open:true,
        message:'aaaaaaaaaaaaa',
        type:'success'
    })

    
    const data = {alert, setAlert}

    return(
        <AlertContext.Provider value={data}>{children}</AlertContext.Provider>
    )

}

export {AlertContext}

export {AlertProvider}