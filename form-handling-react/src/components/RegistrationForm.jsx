import React, { useState } from 'react'
import { object } from 'yup';

function RegistrationForm() {
  const [data, setData] = useState({username: '', email: '', password: ''})
  const [error, setError] = useState({});
  

  const handelChange = (e) =>{
    const {name, value} = e.target
    setData(prevState =>({...prevState, [name]: value}))
  }
  const validate = ()=>{
    const errors = {}
    if(!data.username){
      errors.username = 'username is required.'
    }
    if(!data.email){
      errors.email = 'email is required.'
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
      errors.email = "email is not valid"
    }
    if(!data.password){
      errors.password = 'password is required.'
    }else if(data.password.length < 6){
      errors.password = 'Password must be at least 6 characters.'
    }

    setError(errors)
    return Object.keys(errors).length === 0
  }
  const handelSubmit = (e)=>{
    e.preventDefault()
    if( validate()){
     
    console.log('data.....',data)
  }}


  return (
    <>
      <form onSubmit={handelSubmit} style={{display:'flex', flexDirection: 'column', width:'60%',margin:' 5em auto' }}>
        <input 
          value={data.username}
          onChange={handelChange}
          name='username'
          type="text" 
          placeholder='username' 
          style={{padding:'0.5em', margin:'0.3em 0'}}
        />
        {error.username && <span  style={{color: 'red'}}>{error.username}</span> }
        <input 
          value={data.email}
          onChange={handelChange}
          name='email'
          type="email" 
          placeholder='email' 
          style={{padding:'0.5em', margin:'0.3em 0'}}
        />
        {error.email && <span  style={{color: 'red'}}>{error.email}</span> }

        <input 
          value={data.password}
          onChange={handelChange}
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
      </form>
    </>
  )
}

export default RegistrationForm