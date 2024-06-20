import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RomePage from '../src/routes/Rome/RomePage'
import ProductsPage from './routes/Products/ProductsPage'
import ContactPage from '../src/routes/Contact/ContactPage'
import ScrollToTop from '../src/components/ScrollToTop'
import SignIn from '../src/routes/SignIn/SignIn'
import Account from '../src/routes/SignIn/Account'
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Rome' element={<RomePage />} />
        <Route path='/Products' element={<ProductsPage />} />
        <Route path='/Contact' element={<ContactPage />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Account' element={<Protected><Account /></Protected>} />
      </Routes>
    </BrowserRouter>
  </AuthContextProvider>
);

