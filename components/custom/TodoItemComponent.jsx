"use client";
import React, { useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function TodoItemComponent({ todo, onChanged }) {
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    setChecked(todo.done)
  }, [todo.done])

  const handleCheck = (value) => {
    onChanged && onChanged(value)
    setChecked(value)
  }

  return (
    <Card className="todo-addedit-container">
      <div className="flex items-center space-x-2 m-4">
        <Checkbox
          id="terms"
          checked={checked}
          onCheckedChange={handleCheck}
        />
        <label
          htmlFor="terms"
          className={`text-gray-500 relative transition-all duration-500 ease-in-out before:absolute before:left-0 before:top-1/2 before:w-full before:h-[2px] before:bg-gray-500 before:transition-all before:duration-500 before:ease-in-out ${checked ? 'before:scale-x-100 line-through' : 'before:scale-x-0'}`}
        >
          {todo.text}
        </label>
      </div>
    </Card>
  )
}