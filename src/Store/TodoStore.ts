import { makeAutoObservable } from 'mobx';
import todoApi from '../utils/TodoApi';

interface Item {
  task: {
    id: string;
    title: string;
    made: boolean;
    autor: string;
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
    /* const item = { id: id, title: title, made: false };
    this.todoStore.unshift(item); */
  }

  removeTodo(id: string) {
    todoApi.deleteTodo(id).then(() => {
      this.todoStore = this.todoStore.filter((task) => id !== task.id);
    });
  }

  completedTodo(id: string, made: boolean, title: string, autor: string) {
    todoApi.completeTodo(id, made, title, autor).then((task) => {
      this.todoStore = this.todoStore.map((t) => (t.id === id ? { ...t, made: task.made } : t));
    });
  }

  /* completedTodo(id: string) {
    this.todoStore = this.todoStore.map((task) =>
      task.id === id ? { ...task, made: !task.made } : task,
    );
  } */
}

export default new TodoStore();
