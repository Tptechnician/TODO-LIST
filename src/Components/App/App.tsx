import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import TodoConteiner from '../TodoConteiner/TodoConteiner';
import Footer from '../Footer/footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';
import Popup from '../Popup/Popup';
import todo from '../../Store/TodoStore';
import userApi from '../../utils/UserApi';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [loggedIn, setLoggedin] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const history = useHistory();
  console.log(loggedIn);
  console.log(currentUser);

  function onTogglePopup() {
    setIsPopupOpen(!isPopupOpen);
  }

  function handleRegister(newUser: object) {
    userApi.register(newUser).then((u) => {
      handlelogin(u);
    });
  }

  function handlelogin(user: object) {
    userApi
      .login(user)
      .then((user) => {
        const u = user[0].name;
        setCurrentUser(u);
        todo.getTodos(user[0].name);
        setLoggedin(true);
        localStorage.setItem('login', 'true');
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleloginOut() {
    const todoClear = todo.clearTodoStore();
    if (todoClear === 'storeClear') {
      setCurrentUser('');
      localStorage.removeItem('login');
      setLoggedin(false);
      history.push('/signin');
    }
  }

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/signup">
          <Register onSubmit={handleRegister} />
        </Route>
        <Route exact path="/signin">
          <Login onSubmit={handlelogin} />
        </Route>
        <ProtectedRoute
          path="/"
          component={TodoConteiner}
          loggedIn={loggedIn}
          onTogglePopup={onTogglePopup}
          loginOut={handleloginOut}
          currentUser={currentUser}
        />
      </Switch>
      <Footer />
      <Popup isOpen={isPopupOpen} onTogglePopup={onTogglePopup} currentUser={currentUser} />
    </>
  );
}

export default App;
