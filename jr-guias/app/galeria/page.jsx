"use client";
import { useEffect, useState } from "react";

import {getFirestore,collection,getDocs } from 'firebase/firestore';

import Link from "next/link";
import Item from "./Item";
import '../galeria/galeria.css'



export default function Page() {

  const [data, setData] = useState([])

/* firestore */


useEffect(()=>{
  const querydb= getFirestore()
  const queryCollection = collection(querydb,'productos');
  getDocs(queryCollection)
  .then(res=> setData(res.docs.map(product =>({id: product.id, ...product.data()}))))
},[])

/* firestore */

  return (
    <div >
      <h3>GALERIA</h3>
      <div className="galeria-contenedor">

     
      {data.map((array)=>{



        return(
          <>        
       
          <Item img={array.img}id={`${array.id}`} title={`${array.name}`}/>
       
          </>

        )
      })}
   </div>
    </div>
  );
}
