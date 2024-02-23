import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {FaGoogle} from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useCookies } from 'react-cookie'


const Login = () => {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cookie, setCookie] = useCookies(['access_token'])
  const navigate=useNavigate()
  const loginUser=(e)=>{
    e.preventDefault()
    const userdata={email,password}
    try {
       axios.post('http://localhost:7000/api/user/login',userdata)
       .then((response)=>{
        if(response.status===200) {
          setCookie('access_token',response.data.token)
          window.localStorage.setItem('userId',response.data.userid)
          console.log(response.data);
          toast.success('login successfully')
          navigate('/dashboard')
       }
       }) 
       
    } catch (error) {
        console.log(error);
        toast.success('not successfully')
    }
    setEmail('')
    setPassword('')

  }
  
  return (
    <section>
        <div className='container'>
         <div className='form'>
           <h2>Login</h2>
           <form onSubmit={loginUser}>
               <input type="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)} value={email}/>
               <input type="password" placeholder="password"  onChange={(e)=>setPassword(e.target.value)} value={password} />
               <div className='link'>
                   {/* <Link to ="/reset">Reset password</Link> */}
                  <button className='--btn --btn-primary --btn-block ' type='submit'>Login</button>
               </div>
               <p>--- or ---</p>
               <button className='--btn --btn-primary --btn-block'>
               <FaGoogle color="#fff"/> Login with Goggle 
           </button>
           </form>
           
           <span className='register'><p>Dont have an account?</p>
           <Link to ="/">Register</Link>
           </span>
       </div>
    </div>
    </section>
  )
}

export default Login