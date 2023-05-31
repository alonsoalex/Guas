"use client"


import { useState } from "react"

import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../firebase/config"
import Notification from '../components/Notification'
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

    } catch ({message}) {
        if (message==='Firebase: Error(auth/wrong-password') {
          showMessage('contra mal ')
        }
      
    
    }
};

const [Message, setMessage] = useState('');
const [ShowNotification, setShowNotification]=useState(false);

const showMessage= (message) =>{
  setMessage(Message)
    setShowNotificaiton(true);
    setTimeout(()=>{
      setShowNotificaiton(false)
    },2800)
}

    return (

<>
<Notification show={ShowNotification} message={Message}/>

   
      <div className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
      <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">login</h1>
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
        </>

    )
}