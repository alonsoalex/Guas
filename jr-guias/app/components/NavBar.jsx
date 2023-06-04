"use client"
import {useItem} from '../context/ItemContext';

import React from 'react'
import Link from 'next/link';
import './NavBar.css';
import Carrito from './Carrito/Carrito';




export default function  NavBar() {

  const value = useItem()
    return(



        <div>
        
<nav className='navBar'>
<div className='logo-nav'><h4 className='logoIMG'>LOGO</h4></div>

<ul className="nav nav-underline">
  <li className="nav-item">
  
  </li>
  <li className="nav-item">
  <Link className='nav-link' href={'/'}>Home</Link>
  </li>
   <li className="nav-item">
    <Link className='nav-link' href={'/galeria'}>Galeria</Link>
  </li>

 <Carrito item={value.art}/>

</ul>
</nav>

        </div>
    )
}

