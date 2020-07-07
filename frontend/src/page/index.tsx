import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

const Tela = () => {

    const { toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={() => toggleTheme()}>Aperta</button>
    );
};

export default Tela;