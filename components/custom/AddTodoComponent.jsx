"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AddTodoComponent({ addTodo }) {
  const [todo, setTodo] = React.useState("")

  const handleAddTodo = () => {
    addTodo(todo)
    setTodo("")
  }

  const keyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
    <div className="flex w-full max-w-lg items-center space-x-2 mb-4">
      <Input
        placeholder="Todo..."
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        onKeyDown={keyDown}
      />
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
