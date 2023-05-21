import { SystemStyleInterpolation } from '@chakra-ui/react';

export type CustomTheme<T extends string | number | symbol, P> = {
    components: {
        [key: string]: {
            parts?: never;
            baseStyle?: SystemStyleInterpolation;
            sizes?: Record<string, SystemStyleInterpolation>;
            variants?: Record<T, SystemStyleInterpolation>;
            defaultProps?: P;
        };
    };
};
