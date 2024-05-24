import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Reset = () => {
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    
  return (
    <section>
    <div className='container'>
     <div className='form'>
       <h2>Reset password</h2>
       <form>
       <input type="password" placeholder=" password"  onChange={(e)=>setPassword(e.target.value)} value={password} />
           <input type="email" placeholder=" confirm password"  onChange={(e)=>setCpassword(e.target.value)} value={cpassword}/>
           <div className='link'>
               <Link to ="/reset">Reset password</Link>
              <button className='--btn --btn-primary --btn-block ' type='submit'>Login</button>
           </div>
           <p>--- or ---</p>
           {/* <button className='--btn --btn-primary --btn-block'>
           <FaGoogle color="#fff"/> Login with Goggle 
            </button> */}
       </form>
       
       <span className='register'><p>Dont have an account?</p>
       <Link to ="/">Register</Link>
       </span>
   </div>
</div>
</section>
  )
}

export default Reset