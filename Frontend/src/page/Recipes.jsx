import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {

  const {data,} = useContext(recipecontext)

  const renderRecipe = data.map((recipe) => (<RecipeCard key={recipe.id} recipe={recipe} />))

  return (
    <div className='flex flex-wrap'>{data.length > 0 ? renderRecipe : <p className='text-center w-full'>No recipe available</p>}</div>
  )
}

export default Recipes