import React, { useContext, useEffect } from 'react';

import GlobalStyle from './styles/global';

import Tela from './page/';

import { 
  ThemeContext,
  ThemeContextProvider 
} from './contexts/theme';

const App = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      console.log(`Meu tema é ${theme}`);
    }, 1000)
  })

  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Tela />
    </ThemeContextProvider>
  );
};

export default App;
