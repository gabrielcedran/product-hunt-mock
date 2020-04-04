import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Routes from './routes'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes />
    </div>
  );
}

export default App;
