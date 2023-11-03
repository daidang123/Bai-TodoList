import React from 'react'
import Form from './Form';

function Header({ inputValue, handleInputChange, handleFormSubmit }) {
    return (
      <div className='header'>
        <h1 className='title'>Simple TodoApp</h1>
      <Form/>
      </div>
    );
  }
  
  export default Header;


