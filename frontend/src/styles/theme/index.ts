import 'styled-components';
import { DefaultTheme } from 'styled-components';

import colors from './colors';

import fonts from './fonts';

import units from './units';

export const LightTheme: DefaultTheme = {
    colors: {
        background: {
            primary: colors.light.primary,
            secondary: colors.light.secondary,
            tertiary: colors.light.tertiary,
        },
        text: {
            primary: colors.light.primary,
            secondary: colors.light.secondary,
            tertiary: colors.light.tertiary,
            quaternary: colors.light.quaternary,
        },
        button: {
            def: {
                backgroundColor: colors.light.tertiary,
                textColor: colors.light.primary,
            }
        }
    },
    units: {
        spacing: {
            none: units.spacing.none,
            ultraSmall: units.spacing.ultraSmall,
            xxxxSmall: units.spacing.xxxxSmall,
            xxxSmall: units.spacing.xxxSmall,
            xxSmall: units.spacing.xxSmall,
            xSmall: units.spacing.xSmall,
            small: units.spacing.small,
            medium: units.spacing.medium,
            large: units.spacing.large,
            xLarge: units.spacing.xLarge,
            xxLarge: units.spacing.xxLarge,
            xxxLarge: units.spacing.xxxLarge,
            xxxxLarge: units.spacing.xxxxLarge,
            ultraLarge: units.spacing.ultraLarge,
        },
        button: {
            fontSmall: units.button.fontSmall,
            fontMedium: units.button.fontMedium,
            fontLarge: units.button.fontLarge,
            height: units.button.height,
        },
    },
    fonts: {
        size: {
            ultraSmall: fonts.size.ultraSmall,
            xxxxSmall: fonts.size.xxxxSmall,
            xxxSmall: fonts.size.xxxSmall,
            xxSmall: fonts.size.xxSmall,
            xSmall: fonts.size.xSmall,
            small: fonts.size.small,
            medium: fonts.size.medium,
            large: fonts.size.large,
            xLarge: fonts.size.xLarge,
            xxLarge: fonts.size.xxLarge,
            xxxLarge: fonts.size.xxxLarge,
            xxxxLarge: fonts.size.xxxxLarge,
            ultraLarge: fonts.size.ultraLarge,
        },
        averta: fonts.averta,
        openSansSemiBold: fonts.openSansSemiBold,
        openSansBold: fonts.openSansBold,
    },
};

export const DarkTheme: DefaultTheme = {
    colors: {
        background: {
            primary: colors.dark.primary,
            secondary: colors.dark.secondary,
            tertiary: colors.dark.tertiary,
        },
        text: {
            primary: colors.dark.primary,
            secondary: colors.dark.secondary,
            tertiary: colors.dark.tertiary,
            quaternary: colors.dark.quaternary,
        },
        button: {
            def: {
                backgroundColor: colors.dark.tertiary,
                textColor: colors.dark.primary,
            }
        }
    },
    units: {
        spacing: {
            none: units.spacing.none,
            ultraSmall: units.spacing.ultraSmall,
            xxxxSmall: units.spacing.xxxxSmall,
            xxxSmall: units.spacing.xxxSmall,
            xxSmall: units.spacing.xxSmall,
            xSmall: units.spacing.xSmall,
            small: units.spacing.small,
            medium: units.spacing.medium,
            large: units.spacing.large,
            xLarge: units.spacing.xLarge,
            xxLarge: units.spacing.xxLarge,
            xxxLarge: units.spacing.xxxLarge,
            xxxxLarge: units.spacing.xxxxLarge,
            ultraLarge: units.spacing.ultraLarge,
        },
        button: {
            fontSmall: units.button.fontSmall,
            fontMedium: units.button.fontMedium,
            fontLarge: units.button.fontLarge,
            height: units.button.height,
        },
    },
    fonts: {
        size: {
            ultraSmall: fonts.size.ultraSmall,
            xxxxSmall: fonts.size.xxxxSmall,
            xxxSmall: fonts.size.xxxSmall,
            xxSmall: fonts.size.xxSmall,
            xSmall: fonts.size.xSmall,
            small: fonts.size.small,
            medium: fonts.size.medium,
            large: fonts.size.large,
            xLarge: fonts.size.xLarge,
            xxLarge: fonts.size.xxLarge,
            xxxLarge: fonts.size.xxxLarge,
            xxxxLarge: fonts.size.xxxxLarge,
            ultraLarge: fonts.size.ultraLarge,
        },
        averta: fonts.averta,
        openSansSemiBold: fonts.openSansSemiBold,
        openSansBold: fonts.openSansBold,
    },
};