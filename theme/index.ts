import { extendTheme, HTMLChakraProps, ThemeOverride, ThemingProps } from '@chakra-ui/react';
import { mergeWith } from '@chakra-ui/utils';
import { CardComponent } from './additions/card/card';
import { breakpoints } from './foundations/breakpoints';
import { globalStyles } from './styles';
import {
    badgeStyles,
    buttonStyles,
    flexStyles,
    inputStyles,
    linkStyles,
    switchStyles,
    textareaStyles,
} from './components';

export function makeTheme(overrides: ThemeOverride = {}) {
    const theme = extendTheme({
        ...extendedTheme,
    });
    return mergeWith(theme, overrides);
}

export const extendedTheme = extendTheme(
    { breakpoints }, // Breakpoints
    buttonStyles,
    globalStyles,
    badgeStyles, // badge styles // button styles
    linkStyles, // link styles
    inputStyles, // input styles
    textareaStyles, // textarea styles
    switchStyles, // switch styles
    CardComponent, // card component
    flexStyles // flex styles
);

export const theme = makeTheme();

export interface CustomCardProps extends HTMLChakraProps<'div'>, ThemingProps {}
