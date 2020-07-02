export default {
    // Primary palette
    light: {
        primary: '#050505',
        secondary: '#F7B801',
        tertiary: '#FBFCFB',
        quaternary: '#676767',
    },

    dark: {
        primary: '#F1F4EA',
        secondary: '#F7B801',
        tertiary: '#121212',
        quaternary: '#C7C7C7',
    },
};

export interface ColorsPropsBackground {
    primary: string;
    secondary: string;
    tertiary: string;
};

export interface ColorsPropsText {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
};

export type ButtonColorsScheme = {
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;
};

export interface ColorsPropsButton {
    base: ButtonColorsScheme;
};

export interface ColorsProps {
    background: ColorsPropsBackground;
    text: ColorsPropsText;
    button: ColorsPropsButton;
};

// General export for components
export type ColorsBackgroundOptions = keyof ColorsPropsBackground;

export type ColorsTextOptions = keyof ColorsPropsText;

export type ColorsButtonOptions = keyof ColorsPropsButton;
