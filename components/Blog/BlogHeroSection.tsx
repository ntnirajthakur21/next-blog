import React from 'react';
import { Box, Flex, Container, SimpleGrid, Tag } from '@chakra-ui/react';
import Image from 'next/image';

const BlogHeroSection = () => {
    return (
        <Container maxW="container.xl" as="section">
            <SimpleGrid templateColumns={{ sm: '1fr', md: '1.5fr 1fr', '2xl': '1.5fr 1fr' }} gap={2}>
                <Box
                    position="relative"
                    overflow="hidden"
                    minHeight={{ sm: '15rem', md: '30rem' }}
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
                            <Box textAlign="center" color="white">
                                <Box fontSize="2xl" fontWeight="bold">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Box>
                            </Box>

                            <Flex>
                                <Box color="white" fontSize="sm" fontWeight="bold">
                                    12/12/2021
                                </Box>
                                <Box color="white" fontSize="sm" fontWeight="bold" ml={2}>
                                    12/12/2021
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
                <Flex direction="column" gap={2}>
                    <Box
                        position="relative"
                        overflow="hidden"
                        minHeight={{ sm: '15rem', md: '15rem' }}
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
                            src="/blog2.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="blog 1"
                            style={{
                                transition: 'all 0.3s linear',
                            }}
                        />
                        <Box className="overlay" position="absolute" top={0} left={0} right={0} bottom={0} bg="#0005">
                            <Flex
                                alignItems="flex-start"
                                height="100%"
                                justifyContent="flex-end"
                                direction="column"
                                p={5}
                            >
                                <Tag colorScheme="green" size="lg" variant="solid">
                                    Blog
                                </Tag>
                                <Box textAlign="center" color="white">
                                    <Box fontSize="2xl" fontWeight="bold">
                                        Lorem ipsum dolor sit amet consectetur
                                    </Box>
                                </Box>

                                <Flex>
                                    <Box color="white" fontSize="sm" fontWeight="bold">
                                        12/12/2021
                                    </Box>
                                    <Box color="white" fontSize="sm" fontWeight="bold" ml={2}>
                                        12/12/2021
                                    </Box>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>

                    <Box
                        position="relative"
                        overflow="hidden"
                        minHeight="15rem"
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
                            src="/blog3.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="blog 1"
                            style={{
                                transition: 'all 0.3s linear',
                            }}
                        />
                        <Box className="overlay" position="absolute" top={0} left={0} right={0} bottom={0} bg="#0005">
                            <Flex
                                alignItems="flex-start"
                                height="100%"
                                justifyContent="flex-end"
                                direction="column"
                                p={5}
                            >
                                <Tag colorScheme="green" size="lg" variant="solid">
                                    Blog
                                </Tag>
                                <Box textAlign="center" color="white">
                                    <Box fontSize="2xl" fontWeight="bold">
                                        Lorem ipsum dolor sit amet
                                    </Box>
                                </Box>

                                <Flex>
                                    <Box color="white" fontSize="sm" fontWeight="bold">
                                        12/12/2021
                                    </Box>
                                    <Box color="white" fontSize="sm" fontWeight="bold" ml={2}>
                                        12/12/2021
                                    </Box>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </SimpleGrid>
        </Container>
    );
};

export default BlogHeroSection;
