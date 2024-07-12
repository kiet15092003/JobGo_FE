import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import  customTheme from './Theme/Theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiThemeProvider theme={customTheme}>
      <StyledThemeProvider theme={customTheme}>
        <App />
      </StyledThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
);
