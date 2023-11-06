import React from 'react';
import './App.css';
import Header from './header/Header';
import TodoList from './TodoList/TodoList';
import Filter from './Filter/Filter';
import Footer from './Footer/Footer';
import { TodoProvider } from './Contexts/TodoContext';

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <Header />
        <Filter />
        <TodoList />
        <Footer />
      </div>
    </TodoProvider>
  );
}

export default App;