import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import TodoConteiner from '../TodoConteiner/TodoConteiner';
import Footer from '../Footer/footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';
import Popup from '../Popup/Popup';

function App() {
  const [loggedIn, setLoggedin] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function onTogglePopup() {
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login login={setLoggedin} />
        </Route>
        <ProtectedRoute
          path="/"
          component={TodoConteiner}
          loggedIn={loggedIn}
          onTogglePopup={onTogglePopup}
        />
      </Switch>
      <Footer />
      <Popup isOpen={isPopupOpen} onTogglePopup={onTogglePopup} />
    </>
  );
}

export default App;
