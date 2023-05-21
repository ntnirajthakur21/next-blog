import { CustomTheme } from '@/types';
import { FlexProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

type FlexVariants = 'bothCenter' | 'rowCenter' | 'columnCenter' | 'rowBetween' | 'columnBetween';

export const flexStyles: CustomTheme<FlexVariants, FlexProps> = {
    components: {
        Flex: {
            baseStyle: {
                justifyContent: 'center',
                alignItems: 'center',
            },
            variants: {
                bothCenter: (props: any) => ({
                    justifyContent: mode('center', 'center')(props),
                    alignItems: mode('center', 'center')(props),
                }),
                rowCenter: (props: any) => ({
                    justifyContent: mode('center', 'center')(props),
                    alignItems: mode('flex-start', 'flex-start')(props),
                }),
                columnCenter: (props: any) => ({
                    justifyContent: mode('flex-start', 'flex-start')(props),
                    alignItems: mode('center', 'center')(props),
                }),
                rowBetween: (props: any) => ({
                    justifyContent: mode('space-between', 'space-between')(props),
                    alignItems: mode('center', 'center')(props),
                }),
                columnBetween: (props: any) => ({
                    justifyContent: mode('center', 'center')(props),
                    alignItems: mode('space-between', 'space-between')(props),
                }),
            },
        },
    },
};
