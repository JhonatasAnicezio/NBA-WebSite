import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { fetchScores } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchScores());
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
