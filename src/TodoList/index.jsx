import React from 'react'
import './TodoList.css';

function TodoList(props) {
  return (
      <div className='todolist--container'>
        <h3>Today's tasks</h3>
        <ul>
          {props.children}
        </ul>
      </div>
  )
};

export {TodoList};
