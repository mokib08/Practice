import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const SingleRecipe = () => {

    const { data, setData } = useContext(recipeContext)
    const navigator = useNavigate()
    const params = useParams()
    const recipe = data.find((r) => params.id == r.id)
    const {
        register,
        handleSubmit
    } = useForm({
        defaultValues:{
            title: recipe.title,
            image: recipe.image,
            chef : recipe.chef,
            
        }
    })


    const submitHandler = (recipes) => {
        const index = data.findIndex((recip) => params.id == recip.id)

        const copyData = [...data]
        copyData[index] = {...copyData[index], ...recipes}
        setData(copyData)
    }

    const DeleteHandler = () => {
        const filterData = data.filter((r) => params.id != r.id )
        setData(filterData)
        navigator('/recipe')
    }

    return (
        <div>
            <div>
                <img src={recipe.image} alt="" />
                <h1>{recipe.title}</h1>
                <p>{recipe.chef}</p>
            </div>

            <form onSubmit={handleSubmit(submitHandler)}>
                <input
                    {...register("image")}
                    type="url"
                    placeholder='image url'
                />

                <input
                    {...register("title")}
                    type="text"
                    placeholder='title'
                />

                <input
                    {...register("chef")}
                    type="text"
                    placeholder='chef name'
                />

                <textarea
                    {...register("ingredant")}
                    placeholder='write ingredant'
                ></textarea>

                <select
                    {...register("catagory")}
                >
                    <option value="breakfast">BreakFast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>

                <button>Update Recipe</button>
                <button onClick={DeleteHandler}>Delete Recipe</button>
            </form>
        </div>
    )
}

export default SingleRecipe