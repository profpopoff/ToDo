import React from "react"

export default function Buttons({ todos, setTodos, filter, setFilter }) {
   return (
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
   )
}