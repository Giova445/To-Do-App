import React from "react";
import { useLocalStorage } from "./useLocalStorage"
// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis

const TodoContext = React.createContext();

function TodoProvider(props) {
      // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
    const{
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_v1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      const completedTodos = todos.filter(todo => todo.completed).length
      const totalTodos = todos.length;
    
      
      const filterTodos = todos.filter((todo) => (
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      ));
    
    
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      };


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
    
     // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá a toda nuestra aplicación, por eso necesitamos la prop children
    return (
        <TodoContext.Provider value={{
            error ,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filterTodos,
            addTodo,
            toggleCompleteTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}
// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto

export { TodoContext, TodoProvider };
