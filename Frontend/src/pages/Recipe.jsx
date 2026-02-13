import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard'

const Recipe = () => {
    const {data} = useContext(recipeContext)

  const renderRecipe =  data.map((recipe)=>(<RecipeCard key={recipe.id} recipe={recipe} />))
  return (
    <div>{data.length > 0 ? renderRecipe : "No Recipe Foound"}</div>
  )
}

export default Recipe