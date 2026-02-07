import {useForm} from 'react-hook-form'
import {nanoid} from 'nanoid'
import { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'

const Create = () => {

    const [data, setData] = useContext(recipeContext)

   const {
    register,
    handleSubmit,

   } = useForm()


   const submitHandler = (recipe) => {
        recipe.id = nanoid()
        const copyData = [...data];
        copyData.push(recipe)
        setData(copyData)
        
        
   }


  return (
    <div>
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

            <button>Save recipe</button>
        </form>
    </div>
  )
}

export default Create