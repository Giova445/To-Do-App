import React from "react";
import AstronautLogo from '../Img/Astronaut.png';
import './EmptyTodos.css'

function EmptyTodos() {
    return <div className="empty--container">
                <h2>Oh, nothing around here</h2>
                <img src={AstronautLogo}></img>
                <h5>Use <button class="emptybutton">+</button> To create a new To Do</h5>
            </div>
}

export {EmptyTodos};