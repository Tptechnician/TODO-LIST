import { makeAutoObservable } from 'mobx';

interface User {
  _id?: string;
  name?: string;
  password?: boolean;
}

class UserStore {
  user: User = {};

  constructor() {
    makeAutoObservable(this);
  }

  register(newUser: any) {
    return fetch(`http://localhost:3001/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newUser.name,
        password: newUser.password,
      }),
    });
  }
}

export default new UserStore();
