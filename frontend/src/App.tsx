import React from 'react';

import { ThemeContextProvider } from './contexts/theme';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
    </ThemeContextProvider>
  );
};

export default App;
