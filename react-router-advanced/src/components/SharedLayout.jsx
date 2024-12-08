import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function SharedLayout() {
  return (
    <div>
        <ul style={{display:'flex', flexDirection:'column'}}>
            <p>welcome to uor profile</p>
            <Link to={'/'}>profile</Link>
            <Link to={'details'} >datails</Link>
            <Link to={'settings'} >settings</Link>
        </ul>
        <Outlet />
    </div>
  )
}

export default SharedLayout