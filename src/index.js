// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'; 
import {AuthProvider} from './AuthContext';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);

