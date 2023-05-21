import { CustomTheme } from '@/types';
import { ButtonProps, extendTheme } from '@chakra-ui/react';

type ButtonVariants = 'outline';

export const buttonStyles: CustomTheme<ButtonVariants, ButtonProps> = {
    ...extendTheme(),
    components: {
        Button: {
            baseStyle: {
                borderRadius: '16px',
                boxShadow: '45px 76px 113px 7px rgba(112, 144, 176, 0.08)',
                transition: '.25s all ease',
                boxSizing: 'border-box',
                _focus: {
                    boxShadow: 'none',
                },
                _active: {
                    boxShadow: 'none',
                },
            },
            variants: {
                outline: () => ({
                    borderRadius: '16px',
                    background: 'red',
                }),
            },
        },
    },
};
