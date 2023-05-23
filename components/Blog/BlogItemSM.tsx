import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import React from 'react';

const BlogItemSM = ({ id }: { id: number }) => {
    return (
        <Flex flex={1} bg="secondaryGray.400" gap={3} w="100%" my={2}>
            <Image src={`https://picsum.photos/id/${id + 20}/300/300.webp`} width={150} height={150} alt="blog 1" />
            <Box p={3}>
                <Text
                    fontSize={{
                        base: 'md',
                        md: 'lg',
                    }}
                    fontWeight="bold"
                    lineHeight="0.5"
                    color="blackAlpha.800"
                    _hover={{
                        color: 'brand.300',
                        cursor: 'pointer',
                    }}
                    as={Link}
                    href={`/blog/${id}`}
                >
                    Help Finding Information Online is so easy
                </Text>

                <Flex color="blackAlpha.700" my={2}>
                    <Icon as={FaCalendarAlt} color="blackAlpha.700" />
                    <Box fontSize="sm" fontWeight="bold" ml={2}>
                        12/12/2021
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default BlogItemSM;
