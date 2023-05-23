import React from 'react';
import { Flex, Skeleton, Stack } from '@chakra-ui/react';

const BlogLoadingSkeleton = () => {
    return (
        <Flex bg="secondaryGray.400" gap={3} w="100%" direction={['column', 'row', 'row', 'row']}>
            <Skeleton height="100%" minHeight="15rem" width={['100%', '15rem', '15rem', '15rem']} />
            <Stack flex={1} p={3} gap={1}>
                <Skeleton height="2rem" />
                <Flex gap={3} alignItems="center">
                    <Skeleton height="2rem" width="2rem" />
                    <Skeleton height="1rem" width="5rem" />
                </Flex>
                <Skeleton height="5rem" mt={5} />
            </Stack>
        </Flex>
    );
};

export default BlogLoadingSkeleton;
