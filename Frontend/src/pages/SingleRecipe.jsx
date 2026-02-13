import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { recipeContext } from '../context/RecipeContext'
import { useNavigate, useParams } from 'react-router-dom'

const SingleRecipe = () => {

  const {data, setData} = useContext(recipeContext)
  const navigate = useNavigate()
  const params = useParams()
  const recipe = data.find((recip) => params.id == recip.id)


  const {
    handleSubmit,
    register
  } = useForm({
    defaultValues:{
      title: recipe?.title,
      image: recipe?.image,
      chef : recipe?.chef
    }
  })


  const submitHandler = (recipes) => {
      const index = data.findIndex((r) => params.id == r.id)
      const copyData = [...data]
      copyData[index] = {...copyData[index], ...recipes}
      setData(copyData)

    
      localStorage.setItem('recipe', JSON.stringify(copyData))

  }


  const DeleteHandler = () => {
    const filterData = data.filter((r) => params.id != r.id)
    setData(filterData)

   
    localStorage.setItem("recipe", JSON.stringify(filterData))

    navigate('/recipe')

  }


  const [favroite, setFavroite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  )

  const FavHandler = () => {
    const copyfav = [...favroite]
    copyfav.push(recipe);
    setFavroite(copyfav)

    localStorage.setItem("fav", JSON.stringify(copyfav))
  }

  const UnFavHandler = () => {
    
    setFavroite(filterFav)
    localStorage.setItem("fav", JSON.stringify(filterFav))
  }


  return (
    <div>
      <div className="left">

        

        {favroite.find((f) => f.id == recipe?.id) ? (
          <i onClick={UnFavHandler} className="right-[5%] absolute text-3xl text-red-400 ri-heart-fill"></i>
        ) : (
          <i onClick={FavHandler} className="right-[5%] absolute text-3xl text-red-400 ri-heart-line"></i>
        )}

          <img src={recipe.image} alt="" />
          <h1>{recipe.title}</h1>
          <h4>{recipe.chef}</h4>
      </div>

      <form onSubmit={handleSubmit(submitHandler)} >
        <input
          {...register('image')}
          type="url"
          placeholder='Enter image url'
        />
        <input
          {...register('title')}
          type="text"
          placeholder='Enter Title'
        />
        <input
          {...register('chef')}
          type="text"
          placeholder='Chef Name'
        />

        <textarea
          {...register('ingre')}
          placeholder='ingredancen'
        ></textarea>
        <textarea
          {...register('inst')}
          placeholder='instraction'
        ></textarea>

        <select
          {...register('catagory')}
        >
          <option value="breackfast">BreackFast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button>Update Recipe</button>
        <button onClick={DeleteHandler}>Delete Recipe</button>

      </form>

    </div>
  )
}

export default SingleRecipe