'use client'
import Link from "next/link";
import { useEffect, useState } from "react";


export default function  Item({id,title,img}){



  /* base de datos de firestore */


const prueba = 'pruebaNANA'
    return(
        <>
   
        <div> 
        <>
           
           <div className="caja">
           <div className="card" >
<img src={img} className="card-img-op" alt="..."/>
<div className="card-body">
 <h5 className="card-title">{title}</h5>
 <hr />
 <p className="card-text">description</p>
 <hr />
 <Link href={`./galeria/${id}`} className="btn btn-primary">Go</Link>
</div>
</div>
             </div>
    
            
           </>
        </div>
        </>
    )
}