import { CustomTheme } from '@/types';
import { ButtonProps, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

type ButtonVariants = 'outline' | 'dark';

export const buttonStyles: CustomTheme<ButtonVariants, ButtonProps> = {
    ...extendTheme(),
    components: {
        Button: {
            baseStyle: {
                borderRadius: 5,
                boxShadow: '45px 76px 113px 7px rgba(112, 144, 176, 0.08)',
                transition: '.25s all ease',
                boxSizing: 'border-box',
                _focus: {
                    boxShadow: 'none',
                },
                _active: {
                    boxShadow: 'none',
                },
                _disabled: {
                    cursor: 'not-allowed',
                },
            },
            variants: {
                outline: () => ({
                    borderRadius: '16px',
                    background: 'red',
                }),
                dark: (props) => ({
                    background: mode('dark.200', 'dark.600')(props),
                    color: mode('white.200', 'white.600')(props),
                    _hover: {
                        background: mode('dark.300', 'dark.700')(props),
                        color: mode('white.300', 'white.700')(props),
                    },
                    _disabled: {
                        background: mode('dark.300', 'dark.700')(props),
                        color: mode('white.300', 'white.700')(props),
                    },
                }),
            },
        },
    },
};
