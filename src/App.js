import React, { useState } from "react"
import ToDo from "./components/ToDo"
import ToDoForm from "./components/ToDoForm"

export default function App() {

  const [todos, setTodos] = useState([])

  const [filter, setFilter] = useState({ isActive: false })

  const addTask = (userInput) => {
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
        <ToDoForm addTask={addTask} />
        {todos.map(todo => (!filter.isActive ? true : filter.isComlpete === todo.complete) && (
          <ToDo
            key={todo.id}
            todo={todo}
            toggleTask={handleToggle}
          />
        ))}
        {!!todos.length &&
          <div className="buttons">
            <span>{todos.filter(todo => !todo.complete).length} items left</span>
            <nav>
              <button
                className={!filter.isActive && "active"}
                onClick={() => setFilter({ isActive: false })}
              >All</button>
              <button
                className={filter.isActive && !filter.isComlpete && "active"}
                onClick={() => setFilter({ isActive: true, isComlpete: false })}
              >Active</button>
              <button
                className={filter.isActive && !!filter.isComlpete && "active"}
                onClick={() => setFilter({ isActive: true, isComlpete: true })}
              >Complete</button>
            </nav>
            <button onClick={() => setTodos(todos.filter(todo => !todo.complete))}>Clear complete</button>
          </div>
        }
      </main>
    </div>
  )
}