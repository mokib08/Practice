import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import {useForm} from 'react-hook-form'
import {nanoid} from 'nanoid'



const Create = () => {

    const {data , setData } = useContext(recipecontext)


    const {
        register,
        handleSubmit,
        reset
    } = useForm()


    const submitHandler = (recip) => {
        recip.id = nanoid();
        const copyData = [...data]
        copyData.push(recip)
        setData(copyData)

    }


  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <input 
                {...register("image")}
                type="url"
                placeholder='Enter image url'
                className='block border-b outline-0 pb-2 mt-10'
            />

            <input 
                {...register('title')}
                type="text"
                placeholder='Recipe title'
                className='block border-b outline-0 pb-2 mt-10'
            />

            <input 
                {...register("chef")}
                type="text"
                placeholder='Chef name'
                className='block border-b outline-0 pb-2 mt-10'
            />

            <textarea
                {...register("desc")}
                placeholder='// write ingredent'
                className='block border-b outline-0 pb-2 mt-10'
            ></textarea>

            <textarea
                {...register("instrac")}
                placeholder='// write instraction'
                className='block border-b outline-0 pb-2 mt-10'
            ></textarea>

            <select
                {...register("catagory")}
                className='block border-b outline-0 pb-2 mt-10'
            >
                <option value="breackfast">Breackfast</option>
                <option value="lunch">Lunch</option>
                <option value="supper">Supper</option>
                <option value="dinner">Dinner</option>
            </select>

            <button className='block mt-5 bg-gray-900 rounded px-4 py-2'>Save Recipe</button>
        </form>
    </div>
  )
}

export default Create