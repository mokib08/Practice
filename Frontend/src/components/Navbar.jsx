import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/recipe' >Recipes</NavLink>
        <NavLink to='/about' >About</NavLink>
        <NavLink to='/create-recipe' >Create</NavLink>
    </div>
  )
}

export default Navbar