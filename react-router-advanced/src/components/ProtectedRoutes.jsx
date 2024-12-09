import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({user, children}) {
    console.log('user..........', user)
    if(!user){
        return <Navigate to={'/login'} />
    }
    if(user && user.role === 'admin'){
        return children
    }else if(user.role === 'user'){
        return children
    }else{
        return <Navigate to={'/login'} />
    } 
   
}
exist
export default ProtectedRoutes