import React, { useState } from 'react'
import {FaGoogle} from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const registerUser =async(e)=>{
    e.preventDefault()
    const userData = { email, password};
    try {
      const register =await axios.post('http://localhost:7000/api/user/register',userData)
      toast.success('created succesfully')
      if (register.status === 200) {
        console.log('User registered successfully')
    } else {
        console.log('User registration failed:', register.data); 
    }
    } catch (error) {
      console.error('An error occurred during registration:', error);
      toast.error('not created')
    }
    setEmail('')
    setPassword('')
  }
  return (
    <section>
        <div className='container'>
         <div className='form'>
           <h2>Register</h2>
           <form onSubmit={registerUser}>
               <input type="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)} value={email}/>
               <input type="password" placeholder="password"  onChange={(e)=>setPassword(e.target.value)} value={password} />
               <div className='link'>
                   {/* <Link to ="/reset">Reset password</Link> */}
                  <button className='--btn --btn-primary --btn-block ' type='submit'>Register</button>
               </div>
               <p>--- or ---</p>
               <button className='--btn --btn-primary --btn-block'>
               <FaGoogle color="#fff"/> Login with Goggle
           </button>
           </form>
           
           <span className='register'><p>already have an account?</p>
           <Link to ="/login">Login</Link>
           </span>
       </div>
    </div>
    </section>
  )
}

export default Register