import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import App from 'components/App';

import { theme } from './helpers';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="petly-project-front">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
