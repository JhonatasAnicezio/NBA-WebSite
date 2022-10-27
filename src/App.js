import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchScores } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchScores());
  }, []);

  return (
    <div>
      NBA
    </div>
  );
}

export default App;
