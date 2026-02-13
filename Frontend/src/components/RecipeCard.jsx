import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {

    const {id, image, title, chef} = props.recip
    return <Link
       to={`/recipe/details/${id}`}
    >
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>{chef}</p>
    </Link>

}

export default RecipeCard