import React, { useState } from "react"

export default function ToDoForm({ addTask }) {

   const [userInput, setUserInput] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      addTask(userInput)
      setUserInput('')
   }

   return (
      <form onSubmit={handleSubmit}>
         <button>Save</button>
         <input
            type="text"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            placeholder="What needs to be done?"
         />
      </form>
   )
}