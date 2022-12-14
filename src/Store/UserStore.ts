import { makeAutoObservable } from 'mobx';
import userApi from '../utils/UserApi';
import todo from '../Store/TodoStore';
import { SetStateAction } from 'react';
import { RouterChildContext } from 'react-router-dom';

class UserStore {
  userStore: string = '';
  constructor() {
    makeAutoObservable(this);
  }

  registration(
    newUser: object,
    setLoggedin: React.Dispatch<SetStateAction<boolean>>,
    history: RouterChildContext['router']['history'],
  ) {
    userApi
      .register(newUser)
      .then((u) => {
        this.authorization(u, setLoggedin, history);
      })
      .catch((err) => {
        setLoggedin(false);
      });
  }

  authorization(
    user: object,
    setLoggedin: React.Dispatch<SetStateAction<boolean>>,
    history: RouterChildContext['router']['history'],
  ) {
    userApi
      .login(user)
      .then((user) => {
        const u = user[0].name;
        this.userStore = u;
        todo.getTodos(user[0].name);
        setLoggedin(true);
        localStorage.setItem('login', 'true');
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loginOut(
    setLoggedin: React.Dispatch<SetStateAction<boolean>>,
    history: RouterChildContext['router']['history'],
  ) {
    const todoClear = todo.clearTodoStore();
    if (todoClear === 'storeClear') {
      this.userStore = '';
      localStorage.removeItem('login');
      setLoggedin(false);
      history.push('/signin');
    }
  }
}

export default new UserStore();
