import { makeAutoObservable } from 'mobx';
import nextId from 'react-id-generator';
import todoApi from '../utils/TodoApi';

interface Item {
  task: {
    id: string;
    title: string;
    made: boolean;
  };
}

class TodoStore {
  todoStore: Array<Item['task']> = [];

  constructor() {
    makeAutoObservable(this);
  }

  getTodos(user: string) {
    todoApi.getTodos(user).then((todos) => {
      this.todoStore.unshift(...todos);
    });
  }

  addTodo(title: string) {
    const id = nextId();
    const item = { id: id, title: title, made: false };
    this.todoStore.unshift(item);
  }

  removeTodo(id: string) {
    this.todoStore = this.todoStore.filter((task) => id !== task.id);
  }

  completedTodo(id: string) {
    this.todoStore = this.todoStore.map((task) =>
      task.id === id ? { ...task, made: !task.made } : task,
    );
  }
}

export default new TodoStore();
