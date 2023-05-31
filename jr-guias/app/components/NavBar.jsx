
import React from 'react'
import Link from 'next/link';
import './NavBar.css';
export const Component = (props) => {
    return(
        <div>
        
<nav className='navBar'>
<div className='logo-nav'><h4 className='logoIMG'>LOGO</h4></div>

<ul class="nav nav-underline">
  <li class="nav-item">
  
  </li>
  <li class="nav-item">
  <Link className='nav-link' href={'/'}>Home</Link>
  </li>
   <li class="nav-item">
    <Link className='nav-link' href={'/galeria'}>Galeria</Link>
  </li>
  <li class="nav-item">
  <Link className='btn btn-secondary' href={'/register'}>Register</Link>
  </li>
  <li class="nav-item">
  <Link className='btn btn-primary' href={'/login'}>Login</Link>
  </li>
 

</ul>
</nav>

        </div>
    )
}

export default Component