import { Box, Flex, Icon, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const BlogListItem = () => {
    return (
        <Flex bg="secondaryGray.400" gap={3} w="100%" direction={['column', 'row', 'row', 'row']} height="fit-content">
            <Box
                position="relative"
                overflow="hidden"
                height="100%"
                minHeight="15rem"
                width={['100%', '15rem', '15rem', '15rem']}
                _hover={{
                    cursor: 'pointer',
                    '& > .overlay': {
                        backgroundColor: '#0002',
                    },

                    '& > img': {
                        transform: 'scale(1.1)',
                    },
                }}
            >
                <Image
                    src="/blog1.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="blog 1"
                    style={{
                        transition: 'all 0.3s linear',
                    }}
                />
                <Box className="overlay" position="absolute" top={0} left={0} right={0} bottom={0} bg="#0005">
                    <Flex alignItems="flex-start" height="100%" justifyContent="flex-end" direction="column" p={5}>
                        <Tag colorScheme="green" size="lg" variant="solid">
                            Blog
                        </Tag>
                    </Flex>
                </Box>
            </Box>
            <Box p={3} flex={1}>
                <Box color="blackAlpha.800">
                    <Box
                        fontSize="2xl"
                        fontWeight="bold"
                        _hover={{
                            color: 'brand.300',
                            cursor: 'pointer',
                        }}
                        as={Link}
                        href="/blog/1"
                        passHref
                    >
                        Lorem ipsum dolor sit amet consectetur
                    </Box>
                </Box>

                <Flex color="blackAlpha.700">
                    <Icon as={FaCalendarAlt} color="blackAlpha.700" />
                    <Box fontSize="sm" fontWeight="bold" ml={2}>
                        12/12/2021
                    </Box>
                </Flex>
                <Text color="blackAlpha.700" mt={3}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod
                    voluptatem quos voluptas voluptate quas quibusdam quas
                </Text>
            </Box>
        </Flex>
    );
};

export default BlogListItem;
