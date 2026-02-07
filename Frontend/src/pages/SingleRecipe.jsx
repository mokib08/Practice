import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const SingleRecipe = () => {

    const [data, setData] = useContext(recipeContext)
    const navigator = useNavigate()
    const params = useParams()
    const recipe = data.find((recip) => recip.id == params.id);

    const {
        register,
        handleSubmit
    } = useForm({
        defaultValues: {
            title: recipe.title, 
            image: recipe.image,
            desc: recipe.desc,
            chef: recipe.chef
        }
    })


    const submitHandler = (recipe) => {
        const index = data.findIndex((recip) => params.id == recip.id)
        const copyData = [...data]
        copyData[index] = {...copyData[index], ...recipe}
        setData(copyData)
    }


    const DeleteRecipe = () => {
        const filterData = data.filter((r) => r.id != params.id)
        setData(filterData);

        navigator('/recipe')
    }

    return (
        <div>
            <div>
                <img src={recipe.image} alt="" />
                <h1>{recipe.title}</h1>
                <h3>{recipe.chef}</h3>
                <p>{recipe.desc}</p>

            </div>

            <form onSubmit={handleSubmit(submitHandler)} >
                <input
                    {...register("image")}
                    type="url"
                    placeholder='enter image url'
                />

                <input
                    {...register('title')}
                    type="text"
                    placeholder='Enter title'
                />

                <input
                    {...register('chef')}
                    type="text"
                    placeholder='chef'
                />

                <textarea
                    {...register('desc')}
                    placeholder='// Write Ingreadent'
                ></textarea>

                <textarea
                    {...register('instrac')}
                    placeholder='// Write instraction'
                ></textarea>

                <select {...register('catagory')} >
                    <option value="breakfast">BreackFast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>

                <button>Update recipe</button>
                <button onClick={DeleteRecipe}>Delete recipe</button>
            </form>

        </div>
    )
}

export default SingleRecipe