interface Data {
  url: string;
  headers: {
    [key: string]: string;
  };
}

interface UserApi {
  _url: string;
  _headers: { [key: string]: string };
}

class UserApi {
  constructor(data: Data) {
    this._url = data.url;
    this._headers = data.headers;
  }

  _getResponseData(res: any) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  login(user: any) {
    return fetch(
      `http://localhost:3001/users?name=${user.name.toLowerCase()}&password=${user.password.toLowerCase()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ).then(this._getResponseData);
  }

  register(newUser: any) {
    return fetch(`http://localhost:3001/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newUser.name.toLowerCase(),
        password: newUser.password,
      }),
    }).then(this._getResponseData);
  }
}

const userApi = new UserApi({
  url: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default userApi;
