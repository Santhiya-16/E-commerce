import React, { useState ,useEffect} from 'react'

const Login = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const userData = localStorage.getItem('User');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  function login()
  {
     
    alert('Logged  In successfully!');
  }
  return (
    <div className=' m-3  d-flex justify-content-center'>
       
        {user ?(
          <div className='bg-primary text-white p-3'>
            <form className='m-3 p-3'>
              <label>Username</label>
              <input value={user.username}  className='m-3' required></input><br></br>
              <label>Password</label>
              <input type='password' value={user.password} className='m-3' required></input><br></br>
              <button className='btn btn-outline-dark text-white m-4' onClick={login}>Login</button>
            </form>
          </div>
            
          ): <p>No user data </p>
        }
    </div>
  )
}

export default Login
