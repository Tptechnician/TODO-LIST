import React, { useState } from 'react';
import nextId from 'react-id-generator';

import Header from '../Header/Header';
import Form from '../Form/Form';
import TodoConteiner from '../TodoConteiner/TodoConteiner';
import Footer from '../Footer/footer';

interface Item {
  item: {
    _id: string;
    title: string;
    made: boolean;
  };
}

function App() {
  const [itemData, setItemData] = useState<Item[]>([]);
  console.log(itemData);

  function addTodoItem(item: any) {
    const id = nextId();
    item = { ...item, _id: id, made: false };
    setItemData([item, ...itemData]);
  }
  return (
    <>
      <Header />
      <Form addTodoItem={addTodoItem} />
      <TodoConteiner tasks={itemData} />
      <Footer />
    </>
  );
}

export default App;
