import { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { recipeContext } from '../context/RecipeContext'
import {nanoid} from 'nanoid'
const Create = () => {

    const {data, setData} = useContext(recipeContext)

    const {
        register,
        handleSubmit,
        
    } = useForm()


    const submitHandler = (recip) => {
        recip.id = nanoid()
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

           <button>Save Recipe</button>
        </form>
    </div>
  )
}

export default Create