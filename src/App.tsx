import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import TodoConteiner from './Components/TodoConteiner/TodoConteiner';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <>
      <Header />
      <Form />
      <TodoConteiner />
      <Footer />
    </>
  );
}

export default App;
