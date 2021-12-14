import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CoinProvider } from './Context/CoinContext';
import 'react-alice-carousel/lib/alice-carousel.css';



ReactDOM.render(
  <React.StrictMode>
    <CoinProvider>
      <App/>
    </CoinProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

