import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Recipes from '../page/Recipes'
import About from '../page/About'
import Create from '../page/Create'
import SingleRecipe from '../page/SingleRecipe'

const MainRoutes = () => {
    return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/details/:id' element={<SingleRecipe />} />
        <Route path='/about' element={<About />} />
        <Route path='/create-recipe' element={<Create />} />
    </Routes>

}

export default MainRoutes