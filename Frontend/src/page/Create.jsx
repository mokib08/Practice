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
                placeholder="Enter image url"
             />

             <input 
               {...register("title")}
                type="text"
                placeholder="Enter recipe title"
             />

             <input 
               {...register("chef")}
                type="text"
                placeholder="chef name"
             />

             <textarea
               {...register("desc")}
                type="text"
                placeholder='// Write ingredent'
             ></textarea>

             <textarea
               {...register("ingre")}
                type="text"
                placeholder='// Write instraction'
             ></textarea>

             <select
               {...register("catagory")}
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