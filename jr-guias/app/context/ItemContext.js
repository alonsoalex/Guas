"use client"
import { createContext ,useContext, useState} from "react";

export const ItemContext = createContext();

export  const useItem= ()=>{
  const context=  useContext(ItemContext);
  if(!context) throw new Error('useItem deberia ser usado en un provider')
return context
}




export const ItemProvider= ({children})=>{

    const [art, setArt] = useState(0)


    const createArt=()=>{
        setArt(art+1)

}

    return(

<ItemContext.Provider value={{art,createArt}}>
{children}
</ItemContext.Provider>

    )
}