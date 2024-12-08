import React, { useState } from 'react'
import { object } from 'yup';

function RegistrationForm() {
  // const [data, setData] = useState({username: '', email: '', password: ''})
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({});
  

  const handelNameChange = (e) =>{
    setUsername(e.target.value)
  }
  const handelEmailChange = (e) =>{
    setEmail(e.target.value)
  }
  const handelPassChange = (e) =>{
    setPassword(e.target.value)
  }

  const validate = ()=>{
    const errors = {}
    if(!username){
      errors.username = 'username is required.'
    }
    if(!email){
      errors.email = 'email is required.'
    }else if(!/\S+@\S+\.\S+/.test(email)){
      errors.email = "email is not valid"
    }
    if(!password){
      errors.password = 'password is required.'
    }else if(password.length < 6){
      errors.password = 'Password must be at least 6 characters.'
    }

    setError(errors)
    return Object.keys(errors).length === 0
  }
  const handelSubmit = (e)=>{
    e.preventDefault()
    if( validate()){
     
    console.log('data.....',username,email,password)
  }}


  return (
    <>
      <form onSubmit={handelSubmit} style={{display:'flex', flexDirection: 'column', width:'60%',margin:' 5em auto' }}>
        <input 
          value={username}
          onChange={handelNameChange}
          name='username'
          type="text" 
          placeholder='username' 
          style={{padding:'0.5em', margin:'0.3em 0'}}
        />
        {error.username && <span  style={{color: 'red'}}>{error.username}</span> }
        <input 
          value={email}
          onChange={handelEmailChange}
          name='email'
          type="email" 
          placeholder='email' 
          style={{padding:'0.5em', margin:'0.3em 0'}}
        />
        {error.email && <span  style={{color: 'red'}}>{error.email}</span> }

        <input 
          value={password}
          onChange={handelPassChange}
          name='password'
          type="password"  
          placeholder='password'
          style={{padding:'0.5em', margin:'0.3em 0'}}
        />
        {error.password && <span  style={{color: 'red'}}>{error.password}</span> }

        <button style={{backgroundColor:'blue', color:'white', padding:'0.5em', margin:'0.3em 0'}}
          type='submit'
          >Submit 
        </button>
        <div>
        "if (!username", "if (!email)", "if (!password)", "setErrors"
        </div>
      </form>
    </>
  )
}

export default RegistrationForm