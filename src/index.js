import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CoinProvider } from './Context/CoinContext';
import 'react-alice-carousel/lib/alice-carousel.css';
import { UserProvider } from './Context/UserContext';
import { AlertProvider } from './Context/AlertContext';



ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
    <AlertProvider>
    <CoinProvider>
      <App/>
    </CoinProvider>
    </AlertProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

