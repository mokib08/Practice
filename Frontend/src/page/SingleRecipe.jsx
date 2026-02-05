import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const SingleRecipe = () => {

    const { data, setData } = useContext(recipecontext)
    const navigator = useNavigate()
    const params = useParams()
    const recipe = data.find((recip) => params.id == recip.id)

    const {
        register,
        handleSubmit,
        reset
    } = useForm({
        defaultValues:{
            title: recipe.title,
            image: recipe.image ,
            chef: recipe.chef,
            desc: recipe.desc
        }
    })


    const submitHandler = (recipe) => {
        const index = data.findIndex((recipe) => params.id == recipe.id)
        const copyData = [...data]

        copyData[index] = { ...copyData[index], ...recipe }
        setData(copyData);
        console.log('Updated data');


    }


    const DeleteHandler = () => {
       const filterData = data.filter((r) => r.id != params.id )
       setData(filterData)
       navigator('/recipes')
    }



    return (
        <div className="mt-10 w-full flex gap-10">
            <div className="left w-1/2 p-2">
                <h1 className="text-5xl font-black">{recipe.title}</h1>
                <img className="h-[20vh]" src={recipe.image} alt="" />
            </div>


            <form className="w-1/2 p-2"  onSubmit={handleSubmit(submitHandler)} >
                <input
                    {...register("image")}
                    type="url"
                    className='block border-b outline-0 pb-2 mt-10'
                    placeholder="Enter image url"
                />
                    <small className='text-red-400'>This is have the error is shose</small>
              
                <input
                    {...register("title")}
                    type="text"
                    placeholder="Enter recipe title"
                     className='block border-b outline-0 pb-2 mt-10'
                />

                <input
                    {...register("chef")}
                    type="text"
                    placeholder="chef name"
                     className='block border-b outline-0 pb-2 mt-10'
                />

                <textarea
                    {...register("desc")}
                    type="text"
                    placeholder='// Write ingredent'
                     className='block border-b outline-0 pb-2 mt-10'
                ></textarea>

                <textarea
                    {...register("ingre")}
                    type="text"
                    placeholder='// Write instraction'
                     className='block border-b outline-0 pb-2 mt-10'
                ></textarea>

                <select
                    {...register("catagory")}
                     className='block border-b outline-0 pb-2 mt-10'
                >

                    <option value="breakfast">Breckfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="supper">Supper</option>
                    <option value="dinner">Dinner</option>
                </select>

                <button className='block mt-5 bg-blue-900 rounded px-4 py-2'>Update Recipes</button>
                <button onClick={DeleteHandler} className='block mt-5 bg-red-900 rounded px-4 py-2'>Delete Recipes</button>
            </form>


        </div>
    )
}

export default SingleRecipe