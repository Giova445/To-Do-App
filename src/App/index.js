import React from "react";
import { AppUI } from "./AppUI";

//  const defaultTodos = [
//    {text: 'Cortar Cebolla', completed: true},
//    {text: 'Tomar curso platzi', completed: true},
//    {text: 'llorar con la llorona', completed: false},
//    {text: 'Cortar Cebolla 231232', completed: false},
//  ]

function useLocalStorage(itemName, initialValue) {
  // Creamos el estado inicial para nuestros errores y carga
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
  // Simulamos un segundo de delay de carga 
    setTimeout(() => {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
      } catch(error) {
      // En caso de un error lo guardamos en el estado
        setError(error);
      } finally {
        // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
        setLoading(false);
      }
    }, 1000);
  });
  
  const saveItem = (newItem) => {
    // Manejamos la tarea dentro de un try/catch por si ocurre algún error
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      // En caso de algún error lo guardamos en el estado
      setError(error);
    }
  };

  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return {
    item,
    saveItem,
    loading,
    error,
  };
}


function App() {
  
  const{
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_v1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length;

  
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
      loading={loading}
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
