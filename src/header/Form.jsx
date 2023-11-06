import React, { useState, useContext } from 'react';
import { TodoContext } from '../Contexts/TodoContext';

function Form() {
  const [newTodo, setNewTodo] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='What do you want to do?'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input type='submit' value='Add' />
    </form>
  );
}

export default Form;