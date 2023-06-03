import React from 'react';
import './App.css';
import Partners from './pages/Partners';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <React.Fragment>
      <Partners />
    </React.Fragment>
    </>
  );
}

export default App;
