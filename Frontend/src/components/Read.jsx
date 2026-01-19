import React, { useContext } from 'react'
import { DataContext } from '../Wrapper'
import { toast } from 'react-toastify'

const Read = () => {

    const [todo, setTodo] = useContext(DataContext)


    const DeleteHandler = (id) => {
      const filterTodo =  todo.filter((todos) => todos.id != id);
      setTodo(filterTodo)
      console.log("somthing is wrong");

      toast.error("Todo deleted!")
      
    }
    

    const renderTodo = todo.map((todos) => {
        return <li key={todos.id} className='mb-4 flex justify-between items-center rounded p-4 bg-gray-900 '> 
            <span className='text-xl font-thin'>{todos.title}</span>

            <button onClick={() => DeleteHandler(todos.id)} className='cursor-pointer text-sm font-thin text-red-400 '>Delete</button>
        </li>
    })


  return (
    <div className='w-[40%] p-10'>
        <h1 className='mb-10 text-5xl font-thin'><span className='text-pink-400'>Pending</span> Task</h1>
        <ol>{renderTodo}</ol>
    </div>
  )
}

export default Read