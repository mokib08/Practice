import React, { useContext } from 'react'
import { TodoContext } from '../Wrapper'
import {useForm} from 'react-hook-form'
import {nanoid} from 'nanoid'

const Create = () => {

    const [todo, setTodo] = useContext(TodoContext)


   const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
   } = useForm()

   const submitHandler = (data) => {
    console.log(data);
    
        data.isComplete = false;
        data.id = nanoid();

        const copyTodo = [...todo];
        copyTodo.push(data);
        setTodo(copyTodo);

        reset()
   }


   
   
  return (
    <div>
        <h1>Set <span>Reminder</span> for tasks</h1>

        <form onSubmit={handleSubmit(submitHandler)} >
            <input
                {...register("title", {required:"title can't be empty"}) }
                type="text"
                placeholder='write your tasks'
             />
             <br />
             {errors && errors.title && errors.title.message && (<small>{errors.title.message}</small>)}
             <br /><br />

             <button>Add task</button>
        </form>
    </div>
  )
}

export default Create