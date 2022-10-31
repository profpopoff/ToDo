import React, { useState } from "react"
import ToDo from "./components/ToDo"
import ToDoForm from "./components/ToDoForm"
import Buttons from "./components/Buttons"

export default function App() {

  const [todos, setTodos] = useState([])

  const [filter, setFilter] = useState({ isActive: false })

  const addTodo = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false
      }

      setTodos([...todos, newItem])
    }
  }

  const handleToggle = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }))
  }

  return (
    <div className="app">
      <header>
        <h1>todos</h1>
      </header>
      <main>
        <ToDoForm addTodo={addTodo} />
        {todos.map(todo => (!filter.isActive ? true : filter.isComlpete === todo.complete) && (
          <ToDo
            key={todo.id}
            todo={todo}
            toggleTask={handleToggle}
          />
        ))}
        {!!todos.length &&
          <Buttons todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />
        }
      </main>
    </div>
  )
}