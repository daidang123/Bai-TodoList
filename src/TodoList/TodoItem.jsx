import React, { useContext } from 'react';
import { TodoContext } from '../Contexts/TodoContext';

function TodoItem({ todo }) {
  const { toggleComplete, deleteTodoById } = useContext(TodoContext);

  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  const handleDeleteTodo = () => {
    deleteTodoById(todo.id);
  };

  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={handleToggleComplete}
      />
      <span className={todo.completed ? 'completed' : ''}>
        {todo.content}
      </span>
      <button onClick={handleDeleteTodo}>Remove</button>
    </div>
  );
}

export default TodoItem;