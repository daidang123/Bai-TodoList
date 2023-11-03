import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>
      <div className='header'>
        <h1 className='title'>Simple TodoApp</h1>
        <form action="">
          <input type="text" placeholder='What do you wany to do ?' />
          <input type="submit" />
        </form>
      </div>
      <div className='filter'>
        <form action="">
          <input type="radio" value="" />All
          <input type="radio" value="" />Acctive
          <input type="radio" value="" />Complete
        </form>
      </div>
      <div className='todo-list'>
       <div className='todo-item'>
        <input type="checkbox" />State
       </div>
       <div className='todo-item'>
        <input type="checkbox" />Prop
       </div>
       <div className='todo-item'>
        <input type="checkbox" />Component
       </div>
      </div>
      <div className='footer'>
        <div className='pending'>1 pending</div>
        <button className='removeAll'>Clear All</button>
      </div>
     </div>
    </>
  )
}

export default App
