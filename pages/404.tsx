import { SEO } from '@/components/SEO';
import { Flex, Text } from '@chakra-ui/react';
import React, { Fragment } from 'react';

const PageNotFound = () => {
    return (
        <Fragment>
            <SEO title="404 Page Not Found" />
            <Flex justifyContent="center" alignItems="center" w="100%" flex="1" p={5}>
                <Text
                    fontSize={{
                        base: '2rem',
                        md: '3rem',
                        lg: '4rem',
                        xl: '5rem',
                    }}
                    color="brand"
                    fontWeight="bold"
                >
                    404 Page Not Found
                </Text>
            </Flex>
        </Fragment>
    );
};

export default PageNotFound;
