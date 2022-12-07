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
    return fetch(`http://localhost:3001/todos?autor=${autor}`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getResponseData);
  }
}

const todoApi = new TodoApi({
  url: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default todoApi;
