import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RomePage from '../src/routes/Rome/RomePage'
import ProductsPage from './routes/Products/ProductsPage'
import ContactPage from '../src/routes/Contact/ContactPage'
import ScrollToTop from '../src/components/ScrollToTop'
import Login from '../src/routes/Login/Login'
import Account from '../src/routes/Login/Account'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Rome' element={<RomePage />} />
      <Route path='/Products' element={<ProductsPage />} />
      <Route path='/Contact' element={<ContactPage />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Account' element={<Account />} />
    </Routes>
  </BrowserRouter>
);

