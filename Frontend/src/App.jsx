import React, { useState } from 'react'

const App = () => {


  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
      e.preventDefault()


      const copyTask = [...task];
      copyTask.push({title, details})
      setTask(copyTask)

      console.log(copyTask);
      console.log(task);
      
      setTitle('')
      setDetails('')
  }

  return (
    <div  className='h-screen lg:flex bg-black text-white  p-10 '>
      <form onSubmit={(e) => {submitHandler(e)}}  className='lg:w-1/2 flex flex-col gap-5 p-10  items-start'>
        <h1 className='text-2xl font-bold'>Add Your Notes</h1>
        <input 
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          value={title}
          type="text"
          placeholder='Enter Notes Heading'
          className='w-full outline-none px-5 py-2 border-2 rounded'
         />
         <br />
         <textarea 
            onChange={(e) => {
              setDetails(e.target.value)
            }}
            value={details}
            type="text" 
            placeholder='Write details'
            className='w-full h-30 outline-none px-5 py-2 border-2 rounded'
           />

           <br />
           <button className='w-full outline-none bg-white text-black px-5 py-2 rounded '>Add Note</button>
      </form>

      <div className=' lg:w-1/2 p-10'>
        <h1 className='text-xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {task.map(function(elem, idx){
            return <div key={idx} className='h-52 w-40 rounded-xl py-10 px-4 text-black bg-cover bg-[url(https://imgs.search.brave.com/jC6eAW-2rxbieqD49n_B9KBqPopJoWA_8guYiuWBeE8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/NDIxLzI5NS9zbWFs/bC92ZXJ0aWNhbC1z/cGlyYWwtbm90ZWJv/b2stcG5nLnBuZw)]'>
                  <h3 className='leading-tight text-xl font-bold '>{elem.title}</h3>
                  <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.details}</p>
            </div>
          })}
        </div>
      </div>
      
    </div>
  )
}

export default App