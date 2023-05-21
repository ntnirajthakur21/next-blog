import { CustomTheme } from '@/types';
import { LinkProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const linkStyles: CustomTheme<'brand', LinkProps> = {
    components: {
        Link: {
            baseStyle: {
                textDecoration: 'none',
                boxShadow: 'none',
                _focus: {
                    boxShadow: 'none',
                },
                _active: {
                    boxShadow: 'none',
                },
                _hover: {
                    textDecoration: 'none',
                    border: 'none',
                },
            },
            variants: {
                brand: (props: any) => ({
                    color: mode('brand.500', 'brand.400')(props),
                    _focus: {
                        color: mode('brand.500', 'brand.400')(props),
                    },
                    _active: {
                        color: mode('brand.500', 'brand.400')(props),
                    },
                    _hover: {
                        color: mode('brand.600', 'brand.400')(props),
                    },
                }),
            },
        },
    },
};
