import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {

  const [todo, setTodo] = useState([
    {id: 1, title: "Kamm krle bhai", isComplate: false}
  ])

  return (
    <div className='text-white flex p-10 w-screen h-screen bg-gray-800'>
      <Create todo={todo} setTodo={setTodo} />
      <Read todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App