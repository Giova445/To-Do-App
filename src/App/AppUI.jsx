import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButton } from "../TodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { Toggle } from "../TodoDarkMode";
import {  keepTheme } from "../TodoDarkMode/theme";
import "./App.css"

function AppUI() {
    // Desesctructuramos los valores de nuestro contexto
    const { error,
            loading,
            filterTodos,
            toggleCompleteTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />    
            <TodoSearch />

            <TodoList>
                {error && <TodosError error={error}/>}
                {loading && <TodosLoading />}
                {(!loading && !filterTodos.length) && <EmptyTodos/>}
                {filterTodos.map(todo=> (
                <TodoItem
                     key={todo.text}
                    text={todo.text}
                    complete={todo.completed}
                    onComplete={() => toggleCompleteTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                     />
                    ))}
            </TodoList>
            {!!openModal && (
                <Modal>
                    < TodoForm />
                    {/* <p>{filterTodos[0]?.text}</p> */}
                </Modal>
            )}
            <TodoButton  setOpenModal={setOpenModal} openModal={openModal}/>
            
            <Toggle keepTheme={keepTheme} Toggle={Toggle}></Toggle>
        </React.Fragment>
    );
}


export { AppUI };