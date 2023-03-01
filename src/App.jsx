import './App.css';

import React from 'react';
import { Header, AllCards,SingleCard } from './components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllCards />} />
          <Route path='/event/:id' element={<SingleCard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
