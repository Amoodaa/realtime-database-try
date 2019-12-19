/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './App.css';
import Fire from '../firebase';

const App: React.FC = () => (
  <div className="App">
    <button type="button" tabIndex={-1} onClick={Fire.signinWithGoogle}>sign in</button>
  </div>
);

export default App;
