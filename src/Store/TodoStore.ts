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

  clearTodoStore() {
    this.todoStore = [];
    if (!this.todoStore.length) {
      return 'storeClear';
    }
  }

  addTodo(autor: string, title: string) {
    todoApi.addTodo(autor, title).then((task) => {
      this.todoStore.unshift(task);
    });
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

  filterTodo(mode: string, currentUser: string) {
    if (mode === 'all') {
      todoApi.filterTodo('', currentUser).then((todos) => {
        this.todoStore = todos;
      });
    }
    if (mode === 'done') {
      todoApi.filterTodo('&made=true', currentUser).then((todos) => {
        this.todoStore = todos;
      });
    }
    if (mode === 'undone') {
      todoApi.filterTodo('&made=false', currentUser).then((todos) => {
        this.todoStore = todos;
      });
    }
  }
}

export default new TodoStore();
