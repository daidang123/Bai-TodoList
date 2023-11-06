import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../Contexts/TodoContext';

function TodoList() {
  const { filteredTodos} = useContext(TodoContext);

  return (
    <div className='todo-list'>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
}

export default TodoList;

