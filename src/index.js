import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/css/style.css'
import ThemeProvider from 'react-bootstrap/ThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);