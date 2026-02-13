import RecipeCard from '../components/RecipeCard'

const Fev = () => {

    const favorite = JSON.parse(localStorage.getItem('fav') || [])
    const reranderRecipe = favorite.map((recipe) => (
        <RecipeCard recipe={recipe} />
    ))

  return (
    <div>{favorite.length > 0 ? reranderRecipe : "No Favorite found"}</div>
  )
}

export default Fev