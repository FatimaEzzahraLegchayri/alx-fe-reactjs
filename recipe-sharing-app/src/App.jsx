import RecipeList from './components/RecipeList.jsx'
import RecipeDetails from './components/RecipeDetails.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RecipeList />}/>
      <Route path='/recipe/:id' element={<RecipeDetails />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
