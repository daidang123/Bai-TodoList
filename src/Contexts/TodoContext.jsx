import React, { createContext, useReducer } from 'react';
import { todoReducer, initialState } from '../Reducers/todoReducer';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { todos, filter } = state;

  const addTodo = (newTodo) => {
    if (newTodo.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: { content: newTodo } });
    }
  };

  const toggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: { id } });
  };

  const deleteTodoById = (id) => {
    if (window.confirm('Xóa công việc?')) {
      dispatch({ type: 'DELETE_TODO', payload: { id } });
    }
  };

  const clearCompletedTodos = () => {
    dispatch({ type: 'CLEAR_COMPLETED_TODOS' });
  };

  const handleFilterChange = (e) => {
    dispatch({ type: 'CHANGE_FILTER', payload: { filter: e.target.value } });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    } else {
      return true;
    }
  });

  return (
    <TodoContext.Provider
      value={{
        todos,
        filter,
        addTodo,
        toggleComplete,
        deleteTodoById,
        clearCompletedTodos,
        handleFilterChange,
        filteredTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};