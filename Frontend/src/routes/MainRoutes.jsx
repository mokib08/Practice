
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipe from '../pages/Recipe'
import About from '../pages/About'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'
import Fev from '../pages/Fev'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipes' element={<Recipe/>} />
        <Route path='/recipes/details/:id' element={<SingleRecipe />} />
        <Route path='/about' element={<About/>} />
        <Route path='/create' element={<Create/>} /> 
        <Route path='/fev' element={<Fev/>} />
    </Routes>
  )
}

export default MainRoutes