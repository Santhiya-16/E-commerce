import React, { useState } from 'react'

const Register = () => {
    const [username,setUsername]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    function register()
    {
      const userData = {
        username: username,
        email: email,
        password: password,
      };
      localStorage.setItem('User', JSON.stringify(userData));
      alert('User registered successfully!');
    }
  return (
    <div className=' m-3  d-flex justify-content-center'>
       <form className="bg-primary text-white p-3">
            <label>Username</label>
            <input className='m-3'
             value={username}
             onChange={(e) => setUsername(e.target.value)} required></input><br></br>
            <label>EmailId</label>
            <input className='m-4'  
            value={email}
            onChange={(e) => setEmail(e.target.value)} required></input><br></br>
            <label>Password</label>
            <input className='m-3'
             value={password} type='password' 
             onChange={(e) => setPassword(e.target.value)} required /><br></br>
             <label>Conform Password</label>
            <input className='m-3'
             value={password} type='password' 
             onChange={(e) => setPassword(e.target.value)} required /><br></br>
            <button onClick={register} className="btn  btn-outline-dark m-3 text-white" >
             Register
           </button>
        </form>
    </div>
  )
}
export default Register
