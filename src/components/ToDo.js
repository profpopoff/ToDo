import React from "react"

export default function ToDo({ todo, toggleTask }) {
  return (
    <div
      className={`todo-item ${todo.complete && "complete"}`}
      onClick={() => toggleTask(todo.id)}>
      {todo.task}
    </div>
  )
}