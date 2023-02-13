import React from "react";
import { AppUI } from "./AppUI";

//  const defaultTodos = [
//    {text: 'Cortar Cebolla', completed: true},
//    {text: 'Tomar curso platzi', completed: true},
//    {text: 'llorar con la llorona', completed: false},
//    {text: 'Cortar Cebolla 231232', completed: false},
//  ]

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const[item, setItem] = React.useState(parsedItem);

  // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  // Regresamos los datos que necesitamos
  return [
    item,
    saveItem,
  ];
}


function App() {
  
  const[todos, saveTodos] = useLocalStorage('TODOS_v1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length;

  let searchedTodos = [];
  
  const filterTodos = todos.filter((todo) => (
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  ));



  /**
   * TOGGLE TODO COMPLETED/UNCOMPLETED
   * 
   * @param {text} text 
   */
  const toggleCompleteTodo = (text) => {
    //* Update the state of todos with setTodos
    saveTodos(
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
    saveTodos(todos.filter(
      //* Filter the todos array to remove the todo that was clicked
      todo => todo.text !== text
    ));
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filterTodos={filterTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
