"use client"


import {getFirestore,doc,getDoc } from 'firebase/firestore';

import { useEffect, useState } from "react";

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
       <div>
          <h3>prueba</h3>
         
        </div>
    <h1>user page: {user}</h1>

    <h2>title: {data.name}</h2>
    </>
)

}
