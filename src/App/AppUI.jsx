import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButton } from "../TodoButton";
import "./App.css"

function AppUI() {
    // Desesctructuramos los valores de nuestro contexto
    const { error,
            loading,
            filterTodos,
            toggleCompleteTodo,
            deleteTodo,
        } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />    
            <TodoSearch />

            <TodoList>
                {error && <p>hubo un error</p>}
                {loading && <p>estamos cargando no te desesperes</p>}
                {(!loading && !filterTodos.length) && <p>crea tu primer To Do</p>}
                {filterTodos.map(todo=> (
                <TodoItem
                     key={todo.text}
                    text={todo.text}
                    complete={todo.completed}
                    onComplete={() => toggleCompleteTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                     />
                    ))};
            </TodoList>
            <TodoButton />
        </React.Fragment>
    );
}


export { AppUI };