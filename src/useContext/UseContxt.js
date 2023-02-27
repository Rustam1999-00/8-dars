import { createContext, useState } from "react";

export const NewContex = createContext()

export const NewContexProvider = ({children})=>{

const [moded,setMode]=useState('bg-info')
const [data,setDate]=useState(localStorage.getItem("tokens"))
const[securti,setSecurti]=useState(localStorage.getItem('token'))
// console.log(securti);
   return(
    <NewContex.Provider value={{moded,setMode,data,setDate,securti,setSecurti}} >
    {children}
</NewContex.Provider>
   )
}