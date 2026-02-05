import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {

    const {data} = useContext(recipecontext)
    console.log(data);
    
    const renderRecipe = data.map((recipe) => (<RecipeCard key={recipe.id} recipe={recipe} />))


  return (
    <div className='h-full flex flex-wrap'>{data.length > 0 ? renderRecipe : <p>No Recipes available</p> }</div>
  )
}

export default Recipes