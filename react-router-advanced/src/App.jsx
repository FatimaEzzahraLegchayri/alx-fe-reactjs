import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import SharedLayout from './components/SharedLayout'
import Login from './components/Login'
import { useState } from 'react'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  const [user, setUser] = useState(null)


  return (
     <>
     <BrowserRouter>
      <Routes>

        <Route path='/' element={
          <ProtectedRoute user={user} >
            <SharedLayout user={user} />
          </ProtectedRoute>
          }  
          >

          <Route index element={<Profile />}/>

          <Route path='details' element={<ProfileDetails />} />

          <Route path='settings' element={<ProfileSettings />} />

          {/* <Route path='/blog/:id' element={<BlogPost />} /> */}
        </Route>
        <Route path='/login' element={<Login setUser={setUser} />} />

        <Route path='/dashboard' element={
          <ProtectedRoute user={user} >
          <Dashboard user={user} /> 
          </ProtectedRoute>
        }
        />

      </Routes>
     </BrowserRouter>
     </>
  )
}

export default App
