'use client'
import Link from "next/link";
import { useEffect, useState } from "react";


export default function  Item({id,title}){



  /* base de datos de firestore */


const prueba = 'pruebaNANA'
    return(
        <>
   
        <div> 
        <>
           
           <div className="caja">
           <div class="card" >
<img src="..." class="card-img-op" alt="..."/>
<div class="card-body">
 <h5 class="card-title">{title}</h5>
 <hr />
 <p class="card-text">description</p>
 <hr />
 <Link href={`./galeria/${id}`} class="btn btn-primary">Go {id}</Link>
</div>
</div>
             </div>
    
            
           </>
        </div>
        </>
    )
}