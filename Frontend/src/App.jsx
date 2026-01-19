import React from 'react'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {
  return (
    <div className='text-white flex p-10 w-screen h-screen bg-gray-800'>
      <Create />
      <Read />
    </div>
  )
}

export default App