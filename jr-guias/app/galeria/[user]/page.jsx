"use client"


import {getFirestore,doc,getDoc } from 'firebase/firestore';

import { useEffect, useState } from "react";
import   './item.css';

export default function Users({params,prueba}){

    const {user} =params;


      /* collection de firestore */

  const [data, setData] = useState([])

  useEffect(()=>{
    const querydb= getFirestore()
    const queryDoc = doc(querydb,'productos',`${user}`);
    getDoc(queryDoc)
    .then(res=> setData({id: res.id, ...res.data()}))
  },[])
  
    /* base de datos de firestore */

  /*  firstre  */

return (
    <>
   {/*     <div className='container'>
          <h3>prueba</h3>
         
        </div>
    <h1>user page: {user}</h1>

    <h2>title: {data.name}</h2> */}


<div class="card mb-4 detailItem">
  <img src={data.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{data.name}</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">{data.price}</small></p>
 <div>
 <a href="https://wa.me/59894263246/?text=tu%20texto%20personalizado" target="_blank">
    <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-png-0.png" width="50" height="50"/>
 </a>
 </div>
  </div>
</div>
    </>
)

}
