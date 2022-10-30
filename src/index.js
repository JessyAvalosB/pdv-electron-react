import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import App from './App';
import Navigation from './components/Navigation';
import Products from './components/Products';

import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
