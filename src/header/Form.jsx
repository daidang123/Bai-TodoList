import React from 'react'

function Form ({ inputValue, handleInputChange, handleFormSubmit }) {
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type='text'
        placeholder='What do you want to do?'
        value={inputValue}
        onChange={handleInputChange}
      />
      <input type='submit' value='Add' />
    </form>
  );
}

export default Form


