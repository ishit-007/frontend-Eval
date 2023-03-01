/* eslint-disable no-unused-vars */
import './App.css';

import React, { useContext } from 'react';
import { Header, AllCards, SingleCard, Footer } from './components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { ThemeContext } from './contexts/ThemeContext';

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllCards />} />
          <Route path="/event/:id" element={<SingleCard />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
