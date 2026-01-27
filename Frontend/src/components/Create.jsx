import React, { useContext } from 'react'
import { todoContext } from '../Wrapper'
import {useForm} from 'react-hook-form'
import {nanoid} from 'nanoid'


const Create = () => {

    const [todo, setTodo] = useContext(todoContext)

   const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
   } = useForm()


   const submitHandler = (data) => {
       data.isComplete = false;
        data.id = nanoid();

        const copyTodo = [...todo];
        copyTodo.push(data);

        setTodo(copyTodo);

        reset()
   }


  return (
    <div className=' w-[70%] p-10 mx-auto'>
         <h1 className=' mb-10 text-5xl font-thin'>Set <span className='text-red-400'>Reminders</span> for tasks</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <input 
                {...register('title', {required: "title is can't empty"})}
                type="text" 
                placeholder='write your task'
                className='p-2 border-b w-[50%] text-2xl font-thin outline'
            />
            <br />

            {errors && errors.title && errors.title.message && (<small className='font-thin text-red-400'>{errors.title.message}</small>)}

            <br /><br />
            <button className='mt-5 text-xl px-10 py-2 border rounded-[1em]' >Add Task</button>
        </form>
    </div>
  )
}

export default Create