import React from 'react';

import { ThemeContextProvider } from './contexts/theme';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Routes />
    </ThemeContextProvider>
  );
};

export default App;
