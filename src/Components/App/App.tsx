import React, { useState } from 'react';
import nextId from 'react-id-generator';

import Header from '../Header/Header';
import Form from '../Form/Form';
import TodoConteiner from '../TodoConteiner/TodoConteiner';
import Footer from '../Footer/footer';

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
