import React, { useContext } from 'react';
import { TodoContext } from '../Contexts/TodoContext';

function Filter() {
  const { filter, handleFilterChange } = useContext(TodoContext);

  return (
    <div className='filter'>
      <form>
        <label>
          <input
            type='radio'
            value='all'
            name='filter'
            checked={filter === 'all'}
            onChange={handleFilterChange}
          />
          All
        </label>
        <label>
          <input
            type='radio'
            value='active'
            name='filter'
            checked={filter === 'active'}
            onChange={handleFilterChange}
          />
          Active
        </label>
        <label>
          <input
            type='radio'
            value='completed'
            name='filter'
            checked={filter === 'completed'}
            onChange={handleFilterChange}
          />
          Completed
        </label>
      </form>
    </div>
  );
}

export default Filter;