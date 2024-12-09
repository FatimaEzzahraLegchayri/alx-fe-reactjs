import React from 'react'

function Dashboard({user}) {
    console.log('user in dash', user)
    if (!user) {
        return <p>Please log in to access the dashboard.</p>;
    }
  return (
    <>
    dashboard
    <p>welcome {user?.email}</p> 
    </>
  )
}

export default Dashboard