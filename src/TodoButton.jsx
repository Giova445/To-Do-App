import React from 'react'
import './TodoButton.css';

function TodoButton() {

const onClickButton = () => {
  alert('aqui se deberia abrir el modal')
};

  return (
    <button 
    className='todobutton'
    onClick={onClickButton}
    >+
    </button>
  )
}

export {TodoButton};
