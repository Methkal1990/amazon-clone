import { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        
        dispatch({
          type: 'SET_USER',
          payload: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          payload: null,
        });
      }
    });
    return () => unSubscribeFromAuth();
  }, [dispatch]);
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
