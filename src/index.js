import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
 import { ShopContexProvider } from './context/Shop_Contex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContexProvider>
    <App />
    </ShopContexProvider>
);
 