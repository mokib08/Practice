import { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext'
import {nanoid} from 'nanoid'
import { useNavigate } from 'react-router-dom'



const Create = () => {

   const {data, setData} = useContext(recipecontext)
   const navigate = useNavigate()

   const {
      register,
      handleSubmit,
      reset,
   } = useForm()

   const submitHandler = (recipe) => {
      recipe.id = nanoid();

      const copyData = [...data];
      copyData.push(recipe)
      setData(copyData)
      navigate("/recipes")
   }


  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)} >
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

            <button>Save Recipes</button>
        </form>
    </div>
  )
}

export default Create