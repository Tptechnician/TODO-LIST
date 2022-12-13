import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import TodoConteiner from '../TodoConteiner/TodoConteiner';
import Footer from '../Footer/footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';
import Popup from '../Popup/Popup';

function App() {
  const [loggedIn, setLoggedin] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const history = useHistory();

  function onTogglePopup() {
    setIsPopupOpen(!isPopupOpen);
  }

  useEffect(() => {
    localStorage.removeItem('login');
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/signup">
          <Register setLoggedin={setLoggedin} history={history} />
        </Route>
        <Route exact path="/signin">
          <Login setLoggedin={setLoggedin} history={history} />
        </Route>
        <ProtectedRoute
          path="/"
          component={TodoConteiner}
          loggedIn={loggedIn}
          setLoggedin={setLoggedin}
          onTogglePopup={onTogglePopup}
          history={history}
        />
      </Switch>
      <Footer />
      <Popup isOpen={isPopupOpen} onTogglePopup={onTogglePopup} />
    </>
  );
}

export default App;
