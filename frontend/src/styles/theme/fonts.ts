export default {
    size: {
        ultraSmall: 12,
        xxxxSmall: 16,
        xxxSmall: 20,
        xxSmall: 24,
        xSmall: 28,
        small: 32,
        medium: 36,
        large: 40,
        xLarge: 44,
        xxLarge: 48,
        xxxLarge: 52,
        xxxxLarge: 56,
        ultraLarge: 60,
    },
    averta: 'Averta',
    openSansSemiBold: 'Open Sans SemiBold',
    openSansBold: 'Open Sans Bold',
};

export interface FontsPropsSize {
    ultraSmall: number,
    xxxxSmall: number,
    xxxSmall: number,
    xxSmall: number,
    xSmall: number,
    small: number,
    medium: number,
    large: number,
    xLarge: number,
    xxLarge: number,
    xxxLarge: number,
    xxxxLarge: number,
    ultraLarge: number,
};

export interface FontsProps {
    size: FontsPropsSize;
    averta: string,
    openSansSemiBold: string,
    openSansBold: string,
};

export type TextOptions = keyof FontsProps;

export type TextUnits = keyof FontsPropsSize;
