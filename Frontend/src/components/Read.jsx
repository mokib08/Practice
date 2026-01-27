import React, { useContext } from 'react'
import { todoContext } from '../Wrapper'

const Read = () => {

    const [todo, setTodo] = useContext(todoContext)

    const deleteHandler = (id) =>{
        const filterdTodo = todo.filter((tod) => tod.id != id )
        setTodo(filterdTodo)
    }


   const renderTodo =  todo.map((e) => {
        return <li key={e.id} className='mb-4 flex justify-between items-center rounded p-4 bg-gray-900'>
            <span className='text-xl font-thin'>{e.title}</span>
            <button className='cursor-pointer text-sm font-thin text-red-400' onClick={() => deleteHandler(e.id)}>Delete</button>
        </li>
    })

  return (
    <div>
        <h1 className='mb-10 text-5xl font-thin'><span className='text-pink-400'>Pending</span> Todo</h1>
        <ol>{renderTodo}</ol>
    </div>
  )
}

export default Read