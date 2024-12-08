import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import SharedLayout from './components/SharedLayout'


function App() {

  return (
     <>
     <BrowserRouter>
      <Routes>
          <Route path='/' element={<SharedLayout />} >
          <Route index element={<Profile />} />
          <Route path='details' element={<ProfileDetails />} />
          <Route path='settings' element={<ProfileSettings />} />
          <Route path='/blog/:id' element={<BlogPost />} />
        </Route>
      </Routes>
     </BrowserRouter>
     </>
  )
}

export default App
