import React, { useState } from "react"

export default function ToDoForm({ addTodo }) {

   const [userInput, setUserInput] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      addTodo(userInput)
      setUserInput('')
   }

   return (
      <form onSubmit={handleSubmit}>
         <button><span></span></button>
         <input
            type="text"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            placeholder="What needs to be done?"
         />
      </form>
   )
}