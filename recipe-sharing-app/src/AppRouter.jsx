import React from 'react'
import App from './App'
import RecipeDetails from './components/RecipeDetails.jsx'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/recipe/:id' element={<RecipeDetails />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter