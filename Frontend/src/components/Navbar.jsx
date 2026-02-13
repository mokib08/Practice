import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/recipes' >Recipe</NavLink>
        <NavLink to='/about' >About</NavLink>
        <NavLink to='/create' >Create</NavLink>
        <NavLink to='/fev' >Favorite</NavLink>
    </div>
  )
}

export default Navbar