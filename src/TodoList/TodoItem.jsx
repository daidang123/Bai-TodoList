import React from 'react';

export default function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
    
    </div>
  );
}