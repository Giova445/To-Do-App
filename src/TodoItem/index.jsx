import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'



// const element = <FontAwesomeIcon icon="fa-sharp fa-solid fa-check" />
function TodoItem(props) {
  // const onComplete = () => {
  //   alert('completaste el toddo ' + props.text)
  // }
  // const onDelete = () => {
  //   alert('borraste el toddo ' + props.text)
  // }
  return (
      <li className='todoitem'>
        <span 
        className={`icon icon-check ${props.complete && 'icon-check--active'}`}
        onClick={props.onComplete}
        > 
        <FontAwesomeIcon icon={faCheck} />
        </span>
        <p className={`todoitem--p ${props.complete && 'icon-check--active todoitem--p-complete'}`}>{props.text}</p>
        <span
         className='icon icon-delete'
         onClick={props.onDelete}
        >x</span>
      </li>
  )
}

export {TodoItem};
