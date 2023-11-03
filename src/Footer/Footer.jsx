import React from 'react'

function Footer({ todos, handleClearAll }) {
    const pendingCount = todos.filter((todo) => !todo.completed).length;
  
    return (
      <div className='footer'>
        <div className='pending'>{pendingCount} pending</div>
        <button className='removeAll' onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    );
  }

export default Footer