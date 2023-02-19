import React from 'react'
import './TodoButton.css';
import { TodoContext } from '../TodoContext';

const TodoButton = () => {
  const { setOpenModal } = React.useContext(TodoContext);
  const onClick = () => setOpenModal(prevState => !prevState);

  return (
    <button 
    className='todobutton'
    onClick={onClick}
    >+
    </button>
  )
}

export {TodoButton};
