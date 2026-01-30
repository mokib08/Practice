import {useForm} from 'react-hook-form'
import {nanoid} from 'nanoid'
import { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'


const Create = () => {


    const {data, setData} = useContext(recipecontext)

    const {
        register,
        handleSubmit,
        reset,
        
    } = useForm()


    const submitHandler = (recip) => {
            recip.id = nanoid()

            const copyData = [...data];
            copyData.push(recip)
            setData(copyData)
            
    }


  return (
    <form onSubmit={handleSubmit(submitHandler)}>
        <input 
            {...register('image')}
            type="url"
            placeholder='Enter image url'
             className='block border-b outline-0 pb-2 mt-10'
        />
        <small className='text-red-400'>This is habe the error is shoes</small>

        <input 
            {...register('title')}
            type="text" 
            placeholder='Recipe Title'
             className='block border-b outline-0 pb-2 mt-10'
        />

        <input 
            {...register('chef')}
            type="text"
            placeholder='Chef name'
             className='block border-b outline-0 pb-2 mt-10'
        />

        <textarea 
            {...register('description')}
            type="text"
            placeholder='// write ingredients saprated by coma.'
             className='block border-b outline-0 pb-2 mt-10'
        ></textarea>

        <select 
            {...register('catagory')}
           className='block border-b outline-0 pb-2 mt-10'
        >
            <option value="cat-1">Catagory 1</option>
            <option value="cat-2">Catagory 2</option>
            <option value="cat-3">Catagory 3</option>
        </select>

        <button className='block mt-5 bg-gray-900 rounded px-4 py-2'>Save Recipe</button>

    </form>
  )
}

export default Create