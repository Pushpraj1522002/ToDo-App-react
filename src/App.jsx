import { useState,useEffect } from "react"
import { TodoProvider } from "./contexts"
import { TodoItem,TodoForm } from "./components"


function App() {
  const [todos, setTodos] = useState([])


  //defining the 'context' functions.
  const addTodo = (todo) =>{
    setTodos((prevTodo) => [...prevTodo, {id: Date.now(), ...todo}])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map( (prevTodo)=>(prevTodo.id === id) ? todo : prevTodo) )
  }

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter( (todo)=> todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodo)=> prevTodo.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}:todo))
  }



  //Local Storage : setStorage , getStorage.________________________

  //getStorage : to load the previous todo list whenever refreshed.
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])


  //setStorage : to store the each todo when added or updated and so on.
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])



  return (
    <TodoProvider value={{todos, toggleComplete, addTodo, updateTodo, deleteTodo}}>
    <div className="bg-[#012E40] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-[#024959]">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm/>
            {/* Todo form goes here */} 
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
