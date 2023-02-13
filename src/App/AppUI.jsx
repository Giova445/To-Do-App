import React from "react";
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButton } from "../TodoButton";
import "./App.css"

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    filterTodos,
    toggleCompleteTodo,
    deleteTodo,
}) {
    return (
        <>
            <TodoCounter 
                total={totalTodos}
                completed={completedTodos}
            />    
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue} 
            />
            <TodoList>
                {filterTodos.map(todo=> (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    complete={todo.completed}
                    onComplete={() => toggleCompleteTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            <TodoList/>
            </TodoList>
            <TodoButton />
        </>
    );
}


export { AppUI };