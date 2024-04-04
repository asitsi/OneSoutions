import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Preloader from './components/Preloader/Preloader';

const Partners = lazy(() => import('./pages/Partners'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path='/' element={<Partners />} />
            <Route path='*' element={<Partners />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
