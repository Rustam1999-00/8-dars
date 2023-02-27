import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NewContexProvider } from './useContext/UseContxt';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NewContexProvider>
        <App />
      </NewContexProvider>
    </BrowserRouter>
  </React.StrictMode>
);
