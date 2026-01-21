import React, { useContext } from 'react'
import { TodoContext } from '../Wrapper'

const Read = () => {

   const [todo, setTodo] = useContext(TodoContext)

    const DeleteHandler = (id) => {
        const filterTodo = todo.filter((tod) => tod.id != id);
        setTodo(filterTodo)

        console.log('this is working');
        
    }

   const renderTodo = todo.map((t) => {
    
        return <li key={t.id}>
            <span >{t.title }</span>
            <button 
                className='text-red-400 ml-2'
                onClick={() => DeleteHandler(t.id)}
            >Delete</button>
        </li>
   })


  return (
    <div>
        <h1>Pending <span>Task</span></h1>
        <ol>{renderTodo}</ol>

    </div>
  )
}

export default Read