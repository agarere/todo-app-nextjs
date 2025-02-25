"use client"
import React from 'react'
import AddTodoComponent from "@/components/custom/AddTodoComponent"
import TodoItemComponent from "@/components/custom/TodoItemComponent"

export default function TodoPage() {
  const [todos, setTodos] = React.useState([])

  const addTodo = (todo) => {
    console.log(todo)
    setTodos([...todos, todo])
  }

  return (
    <div className='todo-start-container'>
      <AddTodoComponent
        addTodo={(todo) => addTodo(todo)}
      />
      <ul style={{gap: '1rem', display: 'flex', flexDirection: 'column'}}>
        {todos.map((todo, index) => (
          <TodoItemComponent key={index} todo={todo}/>
        ))}
        
      </ul>
    </div>
  )
}