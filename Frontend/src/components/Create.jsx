import React, { useContext } from 'react'
import { DataContext } from '../Wrapper'
import {useForm} from 'react-hook-form'
import {nanoid} from 'nanoid'
import {toast} from 'react-toastify'

const Create = () => {

    const [todo, setTodo] = useContext(DataContext);


    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm()


    const submitHandler = (data) => {
        console.log(data);
        
        data.isCompleted = false;
        data.id = nanoid();

        const copyTodo = [...todo]
        copyTodo.push(data)
        setTodo(copyTodo)

        toast.success("Todo Added");
        
        reset()

    }


  return (
    <div className='w-[70%] p-10 mx-auto'>
        <h1 className='mb-10 text-5xl font-thin'>Set <span className='text-red-400'>Reminders</span> for tasks</h1>

        <form onSubmit={handleSubmit(submitHandler)}> 
            <input 
                {...register("title", {required:"Title can't be empty"})}
                type="text"
                placeholder='write tasks'   
                className='p-2 border-b w-[50%] text-2xl font-thin outline-0' 
            />
            <br />
            {errors && errors.title && errors.title.message && (<small className='text-red-400 font-thin'>{errors.title.message}</small>)}
            <br /><br />

            <button className='mt-5 px-6 py-2 border rounded-[1em]'>Add Todo</button>
        </form>
    </div>
  )
}

export default Create