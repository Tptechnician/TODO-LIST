import { makeAutoObservable } from 'mobx';
import nextId from 'react-id-generator';

interface Item {
  task: {
    _id: string;
    title: string;
    made: boolean;
  };
}
class TodoStore {
  todoStore: Array<Item['task']> = [
    { _id: '1', title: 'Задача 1', made: true },
    { _id: '2', title: 'Задача 2', made: false },
    { _id: '3', title: 'Задача 3', made: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title: string) {
    const id = nextId();
    const item = { _id: id, title: title, made: false };
    this.todoStore.unshift(item);
  }

  removeTodo(id: string) {
    this.todoStore = this.todoStore.filter((task) => id !== task._id);
  }
}

export default new TodoStore();
