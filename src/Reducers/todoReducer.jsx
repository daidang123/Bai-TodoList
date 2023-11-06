export const initialState = {
  todos: [], 
  filter: {},
};


export const todoReducer = (currentState, action) => {
    switch (action.type) {
      case 'ADD_TODO': {
        const newTodo = {
          id: Date.now(),
          content: action.payload.content,
          completed: false,
        };
  
        return {
          ...currentState,
          todos: [...currentState.todos, newTodo],
        };
      }
  
      case 'TOGGLE_COMPLETE': {
        const updatedTodos = currentState.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        );
  
        return {
          ...currentState,
          todos: updatedTodos,
        };
      }
  
      case 'DELETE_TODO': {
        const filteredTodos = currentState.todos.filter(todo => todo.id !== action.payload.id);
  
        return {
          ...currentState,
          todos: filteredTodos,
        };
      }
  
      case 'CLEAR_COMPLETED_TODOS': {
        const activeTodos = currentState.todos.filter(todo => !todo.completed);
  
        return {
          ...currentState,
          todos: activeTodos,
        };
      }
  
      case 'CHANGE_FILTER': {
        return {
          ...currentState,
          filter: action.payload.filter,
        };
      }
  
      default: {
        throw new Error('Hành động không hợp lệ!');
      }
    }
  };