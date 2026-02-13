import { useContext } from 'react';
import {useForm} from 'react-hook-form'
import { recipeContext } from '../context/RecipeContext';
import {nanoid} from 'nanoid'

const Create = () => {

    const {data, setData} = useContext(recipeContext)


    const {
        register,
        handleSubmit
    } = useForm();


    const submitHandler = (recip) => {

        recip.id = nanoid();

        const copyData = [...data];
        copyData.push(recip)
        setData(copyData)


        localStorage.setItem("recipe", JSON.stringify(copyData))

            
    }


    return (
        <div>
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

                <button>Save Recipe</button>

            </form>
        </div>
    )
}

export default Create