"use client"
import React from 'react'
import AddTodoComponent from "@/components/custom/AddTodoComponent"
import TodoListComponent from "@/components/custom/TodoListComponent"

export default function TodoPage() {
  const [todos, setTodos] = React.useState([])

  const addTodo = async (todoText) => {
    const todo = {
      text: todoText
    }

    try {
      await fetch('/api/todo', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo)
      })

      const responseTodoList = await fetch('/api/todo', {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
      })

      const response = await responseTodoList.json()
      setTodos(response.todos)
    } catch (error) {
      alert('Error adding todo')
    }

  }

  return (
    <div className='todo-start-container'>
      <AddTodoComponent
        addTodo={(todoText) => addTodo(todoText)}
      />
      <TodoListComponent
        todos={todos}
      />
    </div>
  )
}