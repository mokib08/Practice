import React, { useState } from 'react'
import {nanoid} from 'nanoid'

const Create = (props) => {


    const todo = props.todo;
    const setTodo = props.setTodo;

    const [title, setTitle] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        console.log(title);

        const newTodo = {
            id: nanoid(),
            title: title,
            isComplete: false,
        };

        let copytodos = [...todo]
        copytodos.push(newTodo);
        setTodo(copytodos)

        setTitle('')
        
        
    }



  return (
    <div className='w-[70%] p-10 mx-auto '>
        <h1 className='mb-10 text-5xl font-thin'>Set <span className='text-red-400'>Reminder</span> for tasks</h1>
        <form onSubmit={submitHandler}> 
            <input 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className='p-2 border-b w-[50%] text-2xl font-thin outline-0 '
                type="text" 
                placeholder='write your task..' />
            <br /><br />
            <button className='mt-5 text-xl px-10 py-2 border rounded-[1em]'>Add Todo</button>
        </form>
    </div>
  )
}

export default Create