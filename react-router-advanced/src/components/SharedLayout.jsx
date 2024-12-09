import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function SharedLayout({user}) {
    console.log('user in SharedLayout', user)
  return (
    <div>
        <ul style={{display:'flex', flexDirection:'column'}}>
            <p>welcome to uor profile {user.email}</p>
            <NavLink style={({isActive}) => {
                return {color : isActive? 'red' : 'blue'}
            }} 
                to={'/'}
            >
                profile
            </NavLink>
            <NavLink to={'details'} >datails</NavLink>
            <NavLink to={'settings'} >settings</NavLink>
        </ul>
        <Outlet />
    </div>
  )
}

export default SharedLayout