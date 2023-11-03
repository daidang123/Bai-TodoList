import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import Filter from './Filter/Filter';
import TodoList from './TodoList/TodoList';
import Footer from './Footer/Footer';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleTodoCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    }
    if (filter === 'completed') {
      return todo.completed;
    }
    return true;
  });

  const handleClearAll = () => {
    setTodos([]);
  };

  return (
    <div className='container'>
      <Header inputValue={inputValue} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
      <Footer todos={todos} handleClearAll={handleClearAll} />
    </div>
  );
}

export default TodoApp;