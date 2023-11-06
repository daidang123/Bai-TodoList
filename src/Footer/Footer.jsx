import React, { useContext } from 'react';
import { TodoContext } from '../Contexts/TodoContext';

function Footer() {
  const { todos, clearCompletedTodos } = useContext(TodoContext);

  const pendingTasks = todos.filter((todo) => !todo.completed).length;

  return (
    <div className='footer'>
      <div className='pending'>
        You have {pendingTasks} pending {pendingTasks === 1 ? 'task' : 'tasks'}
      </div>
      <button className='removeAll' onClick={clearCompletedTodos}>
        Clear All
      </button>
    </div>
  );
}

export default Footer;