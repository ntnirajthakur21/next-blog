import { CustomTheme } from '@/types';
import { BadgeProps } from '@chakra-ui/react';

export const badgeStyles: CustomTheme<'outline', BadgeProps> = {
    components: {
        Badge: {
            baseStyle: {
                borderRadius: '10px',
                lineHeight: '100%',
                padding: '7px',
                paddingLeft: '12px',
                paddingRight: '12px',
            },
            variants: {
                outline: () => ({
                    borderRadius: '16px',
                }),
            },
        },
    },
};
