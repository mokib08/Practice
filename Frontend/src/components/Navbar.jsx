import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-x-10 '>
        <NavLink className={(e) => e.isActive ? "text-rose-400" : ''} to="/">Home</NavLink>
        <NavLink className={(e) => e.isActive ? "text-rose-400" : ''} to="/recipes">Recipe</NavLink>
        <NavLink className={(e) => e.isActive ? "text-rose-400" : ''} to="/about">About</NavLink>
        <NavLink className={(e) => e.isActive ? "text-rose-400" : ''} to="/create-recipe">Create</NavLink>
    </div>
  )
}

export default Navbar