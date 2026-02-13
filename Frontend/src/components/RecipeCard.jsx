import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {

    const {id, image, title, chef, inst, catagory} = props.recipe

  return <Link 
        to={`/recipes/details/${id}`}
    >
        <img src={image} alt="" />
        <h1>{title}</h1>
        <h3>{chef}</h3>
        <h5>{inst}</h5>
        <span>{catagory}</span>
    </Link>
}

export default RecipeCard