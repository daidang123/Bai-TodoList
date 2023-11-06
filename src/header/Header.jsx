import React, { useContext } from 'react';
import Form from './Form';

function Header() {
 

  return (
    <header className='header'>
      <h1 className='heading'>Simple Todo App</h1>
      <Form/>
    </header>
  );
}

export default Header;