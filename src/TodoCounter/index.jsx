import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  return (
    <>
      <div className='todocounter--container'>
        <h1>Hey, <br></br> What's Next</h1>
        <h2 className='todocounter'>You've Completed {completedTodos} Out of {totalTodos} TODOs</h2>
      </div>
    </>
  )
}

export { TodoCounter };
