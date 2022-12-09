interface Data {
  url: string;
  headers: {
    [key: string]: string;
  };
}

interface TodoApi {
  _url: string;
  _headers: { [key: string]: string };
}

class TodoApi {
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

  getTodos(autor: string) {
    return fetch(`${this._url}/todos?autor=${autor}`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getResponseData);
  }

  addTodo(autor: string, title: string) {
    return fetch(`${this._url}/todos/`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        made: false,
        title: title,
        autor: autor,
      }),
    }).then(this._getResponseData);
  }

  deleteTodo(id: string) {
    return fetch(`${this._url}/todos/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._getResponseData);
  }

  completeTodo(id: string, made: boolean, title: string, autor: string) {
    return fetch(`${this._url}/todos/${id}`, {
      method: 'PUT',
      headers: this._headers,
      body: JSON.stringify({
        made: !made,
        title: title,
        autor: autor,
      }),
    }).then(this._getResponseData);
  }

  filterTodo(mode: string, currentUser: string) {
    return fetch(`${this._url}/todos?autor=${currentUser}${mode}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._getResponseData);
    /* if (mode === 'all') {
      return fetch(`${this._url}/todos?autor=${currentUser}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(this._getResponseData);
    }
    if (mode === 'done') {
      return fetch(`${this._url}/todos?autor=${currentUser}&made=true`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(this._getResponseData);
    }
    if (mode === 'undone') {
      return fetch(`${this._url}/todos?autor=${currentUser}&made=false`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(this._getResponseData);
    } */
  }
}

const todoApi = new TodoApi({
  url: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default todoApi;
