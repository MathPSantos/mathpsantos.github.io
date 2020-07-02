import React from 'react';

import GlobalStyle from './styles/global';

import { ThemeContextProvider } from './contexts/theme';

const App = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
    </ThemeContextProvider>
  );
}

export default App;
