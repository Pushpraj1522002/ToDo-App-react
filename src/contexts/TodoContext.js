import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}     
})


//exporting the provider variable, so that you don't have to use createContext.Provider at app.jsx or component while wrapping the component to pass the values.
export const TodoProvider = TodoContext.Provider;

 
//exporting the useTodo hook, so you don't have to use useContext() at the component.
export  const useTodo = () =>{
    return useContext(TodoContext);
}
