import React from 'react'
import TodoItemComponent from './TodoItemComponent'

export default function TodoListComponent({ todos = [] }) {
  return (
    <div>
      <ul style={{gap: '1rem', display: 'flex', flexDirection: 'column'}}>
        {todos
          .map((todo, index) => (
          <TodoItemComponent
            key={index}
            todo={todo}
          />
        ))}    
      </ul>
    </div>
  )
}
