import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Products from './components/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
