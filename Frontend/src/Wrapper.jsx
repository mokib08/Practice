import React, { createContext, useState } from 'react'

    export  const DataContext = createContext(null)

const Wrapper = ({children}) => {


    const [todo, setTodo] = useState([
        {
            id: 1,
            title: "kamm krle bhai",
            isCompleted: false
        }
    ])

  return (
    <div>
        <DataContext.Provider value={[todo, setTodo]}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default Wrapper