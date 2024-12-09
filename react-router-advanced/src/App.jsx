import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import SharedLayout from './components/SharedLayout'
import Login from './components/Login'
import { useState } from 'react'
import Dashboard from './components/Dashboard'
import ProtectedRoutes from './components/ProtectedRoutes'


function App() {
  const [user, setUser] = useState(null)


  return (
     <>
     <BrowserRouter>
      <Routes>

        <Route path='/' element={
          <ProtectedRoutes user={user} >
            <SharedLayout user={user} />
          </ProtectedRoutes>
          }  
          >

          <Route index element={<Profile />}/>

          <Route path='details' element={<ProfileDetails />} />

          <Route path='settings' element={<ProfileSettings />} />

          {/* <Route path='/blog/:id' element={<BlogPost />} /> */}
        </Route>
        <Route path='/login' element={<Login setUser={setUser} />} />

        <Route path='/dashboard' element={
          <ProtectedRoutes user={user} >
          <Dashboard user={user} /> 
          </ProtectedRoutes>
        }
        />

      </Routes>
     </BrowserRouter>
     </>
  )
}

export default App
