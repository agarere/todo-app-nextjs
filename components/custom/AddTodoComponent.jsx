"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AddTodoComponent({ addTodo }) {
  const [todo, setTodo] = React.useState("")

  const handleAddTodo = () => {
    addTodo(todo)
  }

  const todoEnter = (e) => {
    setTodo(e.target.value)
  }

  return (
    <div className="flex w-full max-w-lg items-center space-x-2 mb-4">
      <Input placeholder="Todo..." onChange={todoEnter}/>
      <Button
        type="submit"
        onClick={() => handleAddTodo()}
        disabled={!todo}
      >
        Add
      </Button>
    </div>
  )
}
