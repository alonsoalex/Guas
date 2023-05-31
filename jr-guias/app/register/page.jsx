"use client"


import { useState } from "react"

import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../firebase/config"

export default function Page() {


const [credentials, setCredentils] = useState({
    email:"",
    password:""
})


const changeUser= e=>{
    setCredentils({
        ...credentials,
        [e.target.name]: e.target.value,
    })

}
const registerUser =async ()=>{

    try {
      await  createUserWithEmailAndPassword(auth, 
        credentials.email, 
        credentials.password);

    } catch (error) {
        console.log('error');
    }
};

    return (



/* 
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Login</h1>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
    
            <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div class="form-floating mb-3">
                <input type="email" name='email' class="form-control" id="floatingInput" placeholder="name@example.com" onChange={changeUser}/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" name='password' class="form-control" id="floatingPassword" placeholder="Password" onChange={changeUser}/>
                <label for="floatingPassword">Password</label>
              </div>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"/> Remember me
                </label>
              </div>
              <button onClick={registerUser} class="w-100 btn btn-lg btn-primary">Sign up</button>
              <hr class="my-4"/>
              <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
            </form>
            
          </div>
        </div>
      </div>  */
        <div className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
  <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Registrar</h1>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <div class="form-floating mb-3">  
             <label for="floatingInput">correo</label>
        <input name='email' type="email" id='email'  class="form-control" onChange={changeUser}/>
        </div>
      <div class="form-floating mb-3">
      <label for="floatingInput" htmlFor='password'>contrasena</label>
        <input name='password' type="passsword" id='password'  class="form-control" onChange={changeUser}/>
      </div>
      </div>
        <button className="btn-primary btn" onClick={registerUser}> Login</button>
        
    </div>

    )
}