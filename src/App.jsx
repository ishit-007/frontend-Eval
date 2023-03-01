import './App.css';

import React from 'react';
import { Header, AllCards, Filter } from './components';

function App() {
  return (
    <div className="app">
      <Header />
      <Filter />
      <AllCards />
    </div>
  );
}

export default App;
