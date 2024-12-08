import React, { useState } from 'react'

function RegistrationForm() {
  const [data, setData] = useState({username: '', email: '', password: ''})
  const handelChange = (e) =>{
    const {name, value} = e.target
    setData(prevState =>({...prevState, [name]: value}))
  }
  const handelSubmit = (e)=>{
    e.preventDefault()
    console.log('data', data)
  }


  return (
    <>
      <form onSubmit={handelSubmit} style={{display:'flex', flexDirection: 'column', width:'60%',margin:' 5em auto' }}>
        <input 
          value={username}
          onChange={handelChange}
          name='username'
          type="text" 
          placeholder='username' 
          style={{padding:'0.5em', margin:'0.3em 0'}}
        />
        <input 
          value={email}
          onChange={handelChange}
          name='email'
          type="email" 
          placeholder='email' 
          style={{padding:'0.5em', margin:'0.3em 0'}}
        />
        <input 
          value={password}
          onChange={handelChange}
          name='password'
          type="password"  
          placeholder='password'
          style={{padding:'0.5em', margin:'0.3em 0'}}
        />
        <button style={{backgroundColor:'blue', color:'white', padding:'0.5em', margin:'0.3em 0'}}
          type='submit'
          >Submit
        </button>
      </form>
    </>
  )
}

export default RegistrationForm