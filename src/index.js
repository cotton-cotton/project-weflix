import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';
import { store } from '../src/pages/App/store';
import { Provider } from 'react-redux';
// const rootNode = document.getElementById('root');

const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.createRoot(rootNode).render(
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
// document.getElementById('root')
// );
