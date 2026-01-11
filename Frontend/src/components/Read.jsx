import React from 'react'

const Read = (props) => {


  const todo = props.todo;
  const setTodo = props.setTodo;

  // ekhane id holo todo create korar somoy nanoid() theke jei id ta create kora hoyche seta
  // (id) mane protita single element er id theke oi element ke select kora holo deleted koar jonno
  const DeleteHandler = (id) => {
    // ekhane todo theke ID filter kora hocche.. todo.id er current jei Id seta jabe na/thakbe UI a
    // !=id mane jei id match korbe na seta jabe na..
    // jeta toso te jabe na seta setTodo(filterdTodo) te set kore diya holo/ todo update kore diya holo
    // mot kothay todo theke jei todo deleted hobe seta chara baki jei gula thakbe segula filterdTodo thakbe o filterdTodo setTodos diye set kora holo
    const filterTodo = todo.filter((todo) => todo.id !=id);
    setTodo(filterTodo) ; // setTodo er vitore data pass kore diya holo 
  }


  // UI a dekhanor jonno nicher niyome
  const renderTodos = todo.map((todo)=> {
    return <li key={todo.id} className='mb-4 flex justify-between items-center rounded p-4 bg-gray-900'>
        <span className='text-xl font-thin'>{todo.title}</span>


        {/* 
          data delete korar jonno use kora holo niche onClick er vitore ()=> likhar karone auto Deleted off korar jonno
        */}
        <button 
          className='cursor-pointer text-sm font-thin text-red-400'
          onClick={() => DeleteHandler(todo.id)}
        >Delete</button>

    </li>
  }) 

  return (
    <div className='w-[40%] p-10 '>
      <h1 className='mb-10 text-5xl font-thin'><span className='text-pink-400'>Pending</span> Todo</h1>
      <ol>{renderTodos}</ol>
    </div>
  )
}

export default Read