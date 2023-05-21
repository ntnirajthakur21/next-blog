import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Header, Footer } from '..';

const DefaultPageLayout = ({ children }: { children: ReactNode }): React.JSX.Element => {
    return (
        <Flex direction="column" minHeight="100vh">
            <Header />
            <Flex flex={1} width="100%" flexDirection="column" height="100%">
                {children}
            </Flex>
            <Footer />
        </Flex>
    );
};

export default DefaultPageLayout;
