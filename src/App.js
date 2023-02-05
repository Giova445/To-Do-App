import React from "react";
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoButton } from "./TodoButton";
import "./App.css"

const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar curso platzi', completed: true},
  {text: 'llorar con la llorona', completed: false},
  {text: 'Cortar Cebolla 231232', completed: false},
]

function App() {

  const[todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length;

  
  const filterTodos = todos.filter((todo) => (
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  ))

/**
 * TOGGLE TODO COMPLETED/UNCOMPLETED
 * 
 * @param {text} text 
 */
const toggleCompleteTodo = (text) => {
  //* Update the state of todos with setTodos
  setTodos(
    //* Filter the todos array
    todos.map(todo => {
      //* If the text of the todo matches the text of the todo that was clicked
      if (todo.text === text) {
        return {
          //* ... Include the rest of the todo array
          ...todo,
          //* And toggle the completed property
          completed: !todo.completed,
        };
      }
      //* Return the rest of the todos array unchanged
      return todo;
    })
  );
};

/**
 * DELETE TODO
 * 
 * @param {text} text 
 */
const deleteTodo = (text) => {
  //* Update the state of todos with setTodos
  setTodos(todos.filter(
    //* Filter the todos array to remove the todo that was clicked
    todo => todo.text !== text
  ));
};

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

export default App;
