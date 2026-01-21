import { createContext, useState } from "react"

export const TodoContext = createContext(null)



const Wrapper = ({ children }) => {

    const [todo, setTodo] = useState([
        {
            id: 1,
            title: "Kamm krle bhai",
            isComplete: false
        }
    ])

    return (
        <TodoContext.Provider value={[todo, setTodo]}>
            {children}
        </TodoContext.Provider>
    )
}

export default Wrapper