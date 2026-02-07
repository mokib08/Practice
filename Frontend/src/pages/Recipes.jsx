import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {

  const [data] = useContext(recipeContext)

  const renderRecipe = data.map((recipe) => (<RecipeCard recipe={recipe} />))
  return (
    <div>{data.length > 0 ? renderRecipe : <h3>No Recipe available</h3> }</div>
  )
}

export default Recipes