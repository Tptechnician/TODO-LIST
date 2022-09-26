import React from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import TodoConteiner from '../TodoConteiner/TodoConteiner';
import Footer from '../Footer/footer';
import { todoItemDatabase } from '../../Database/Database';
console.log(todoItemDatabase);

function App() {
  function addTodoItem(value: { title: string }) {
    todoItemDatabase.unshift(value);

    console.log(todoItemDatabase);
  }
  return (
    <>
      <Header />
      <Form addTodoItem={addTodoItem} />
      <TodoConteiner />
      <Footer />
    </>
  );
}

export default App;
