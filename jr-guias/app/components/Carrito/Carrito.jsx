
'use client'
import { useItem } from "@/app/context/ItemContext";


export default function Carrito(){

    const value = useItem()

  
return(

    <>
    <h3>'carrito'</h3>
    <p className="btn btn-danger">{value.art}</p>
<div>
   
</div>
    </>
)

}