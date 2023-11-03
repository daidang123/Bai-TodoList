import React from 'react'

function Filter({ filter, handleFilterChange }) {
    return (
      <div className='filter'>
        <form>
          <label>
            <input
              type='radio'
              name='filter'
              value='all'
              checked={filter === 'all'}
              onChange={handleFilterChange}
            />
            All
          </label>
          <label>
            <input
              type='radio'
              name='filter'
              value='active'
              checked={filter === 'active'}
              onChange={handleFilterChange}
            />
            Active
          </label>
          <label>
            <input
              type='radio'
              name='filter'
              value='completed'
              checked={filter === 'completed'}
              onChange={handleFilterChange}
            />
            Completed
          </label>
        </form>
      </div>
    );
  }

export default Filter