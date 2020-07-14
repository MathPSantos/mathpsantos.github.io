import { createGlobalStyle } from 'styled-components';

import AvertaRegular from '../assets/fonts/Averta-Regular.otf';
import OpenSansSemiBold from '../assets/fonts/OpenSans-SemiBold.ttf';
import OpenSansBold from '../assets/fonts/OpenSans-Bold.ttf';

export default createGlobalStyle`

    @font-face {
        font-family: 'Averta';
        font-style: normal;
        font-weight: 300;
        src: url(${AvertaRegular});
    };

    @font-face {
        font-family: 'Open Sans SemiBold';
        font-style: normal;
        font-weight: 300;
        src: url(${OpenSansSemiBold});
    };

    @font-face {
        font-family: 'Open Sans Bold';
        font-style: normal;
        font-weight: 400;
        src: url(${OpenSansBold});
    };

    :root {
        font-size: 16px;
        font-family: ${({ theme }) => theme.fonts.averta};
        color: ${({ theme }) => theme.colors.text.primary};
    };

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    };

    body {
        background-color: ${({ theme }) => theme.colors.background.tertiary};
    };
`; 
