import { makeAutoObservable } from 'mobx';
import userApi from '../utils/UserApi';
import todo from './TodoStore';

class UserStore {
  currentUser: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  register(newUser: any) {
    userApi.register(newUser);
  }

  login(user: any) {
    userApi.login(user).then((user) => {
      this.currentUser = user[0].name;
      todo.getTodos(this.currentUser);
      localStorage.setItem('login', 'true');
    });
  }
}

export default new UserStore();
