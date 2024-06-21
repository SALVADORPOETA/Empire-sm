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
import SignInEmail from './routes/SignIn/SignInEmail';
import SignUpEmail from './routes/SignIn/SignUpEmail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/rome' element={<RomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/account' element={<Protected><Account /></Protected>} />
        <Route path='/signinemail' element={<SignInEmail />} />
        <Route path='/signupemail' element={<SignUpEmail />} />
      </Routes>
    </BrowserRouter>
  </AuthContextProvider>
);

