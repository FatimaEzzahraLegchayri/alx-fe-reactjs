import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setUser}) {
    const [values, setValues] = useState({email:'', password:'', role:''})
    const navigate = useNavigate()

    const handelSubmit = (e)=>{
        e.preventDefault()
        setUser({email: values.email, password: values.password, role: values.role})
        console.log('values', values.email, values.password, values.role)
    if(values.role === 'admin'){
        navigate('/dashboard')
    }else if(values.role === 'user'){
        navigate('/')
    }else{
        navigate('/login')
    }    
    }

  return (
    <form onSubmit={handelSubmit}
    style={{display:'flex', flexDirection: 'column'}}>
        <input 
            type="text" 
            placeholder='email' 
            value={values.email}
            onChange={(e) => setValues((prevValue) => ({...prevValue, email: e.target.value}))}
        />
        <input 
            type="password" 
            placeholder='password' 
            value={values.password}
            onChange={(e) => setValues((prevValue) => ({...prevValue, password: e.target.value}))}

        />
        <input 
            type="text" 
            placeholder='role' 
            value={values.role}
            onChange={(e) => setValues((prevValue) => ({...prevValue, role: e.target.value}))}

        />
        <button type='submit'>login</button>
    </form>
  )
}

export default Login