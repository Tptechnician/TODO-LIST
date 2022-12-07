import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
// import TodoConteiner from '../TodoConteiner/TodoConteiner';
import Footer from '../Footer/footer';
import Register from '../Register/Register';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/signup">
          <Register />
        </Route>
      </Switch>
      {/* <TodoConteiner /> */}
      <Footer />
    </>
  );
}

export default App;
