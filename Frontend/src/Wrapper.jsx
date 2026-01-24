import { createContext, useState } from "react"

export const todoContext = createContext(null)

const Wrapper = (props) => {

    const [todo, setTodo] = useState([
        {
            id: 1,
            title: "Kamm krle bhai",
            isCompleted: false
        }
    ])

  return (
    <todoContext.Provider value={[todo, setTodo]}>
        {props.children}
    </todoContext.Provider>
  )
}

export default Wrapper