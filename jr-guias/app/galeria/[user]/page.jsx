"use client"

import {useItem} from '../../context/ItemContext';

import {getFirestore,doc,getDoc } from 'firebase/firestore';

import { useEffect, useState } from "react";
import   './item.css';

export default function Users({params,}){

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
/* context  */
const {createArt} = useItem()
const value = useItem()

console.log(value.art);
return (
    <>
  


<div className="card mb-4 detailItem">
  <img src={data.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{data.name}</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small className="text-body-secondary">{data.price}</small></p>
 <div>

 <div>
      <h4>de context </h4>
      <button className='btn btn-primary' onClick={createArt}>+: {value.art}</button>

     </div>
 <a href="https://wa.me/59894263246/?text=tu%20texto%20personalizado" target="_blank">
    <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-png-0.png" width="50" height="30"/>
 </a>
 </div>
  </div>
</div>
    </>
)

}
