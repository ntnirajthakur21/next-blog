import { Box, Container, Flex, Icon, SimpleGrid, Stack, Tag, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const category: {
    name: string;
    slug: string;
}[] = [
    {
        name: 'All',
        slug: 'all',
    },
    {
        name: 'News',
        slug: 'news',
    },
    {
        name: 'Blog',
        slug: 'blog',
    },
    {
        name: 'Event',
        slug: 'event',
    },
];

const LandingPage = () => {
    const router = useRouter();

    const [posts, setPosts] = useState<number[]>([1]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const sentinelRef = useRef(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        });

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, [sentinelRef]);

    const fetchPosts = async () => {
        setLoading(true);

        // const response = await fetch(`/api/posts?page=${page}`);
        // const data = await response.json();
        setTimeout(() => {
            setPosts((prev) => [...prev, ...[posts.length + 1]]);
            setPage((prevPage) => prevPage + 1);
            setLoading(false);
        }, 1000);
    };

    const handleIntersection = (entries: any) => {
        const target = entries[0];
        if (target.isIntersecting && !loading) {
            fetchPosts();
        }
    };

    return (
        <Fragment>
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
                            <Box
                                className="overlay"
                                position="absolute"
                                top={0}
                                left={0}
                                right={0}
                                bottom={0}
                                bg="#0005"
                            >
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
                            <Box
                                className="overlay"
                                position="absolute"
                                top={0}
                                left={0}
                                right={0}
                                bottom={0}
                                bg="#0005"
                            >
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

            <Container maxW="container.xl" as="section" my={5}>
                <SimpleGrid templateColumns={{ sm: '1fr', md: '1.5fr 1fr', '2xl': '1.5fr 1fr' }} gap={2}>
                    <Flex direction="column" gap={2} w="100%" ref={sentinelRef}>
                        <Text bg="blackAlpha.900" textAlign="center" p={3} fontSize="2xl" color="white">
                            Latest
                        </Text>
                        {posts.map((_, i) => (
                            <BlogItem key={i} />
                        ))}
                        {loading && <p>Loading...</p>}
                    </Flex>

                    <Box>
                        <Text bg="blackAlpha.900" textAlign="center" p={3} fontSize="2xl" color="white">
                            Categories
                        </Text>

                        <Stack>
                            {category.map(({ slug, name }, i) => (
                                <Flex
                                    px={5}
                                    py={1}
                                    alignItems="center"
                                    justifyContent="space-between"
                                    _hover={{
                                        cursor: 'pointer',
                                        color: 'blue.600',
                                        '& > svg': {
                                            transform: 'translateX(5px)',
                                        },
                                    }}
                                    color={router.pathname === `/category/${slug}` ? 'green.500' : 'blue.400'}
                                    as={Link}
                                    href={`/category/${slug}`}
                                    passHref
                                >
                                    <Text fontSize="xl">{name}</Text>
                                    <Icon
                                        as={AiOutlineRight}
                                        style={{
                                            transition: 'all 0.3s linear',
                                        }}
                                    />
                                </Flex>
                            ))}
                        </Stack>
                    </Box>
                </SimpleGrid>
            </Container>
        </Fragment>
    );
};

export default LandingPage;

const BlogItem = () => {
    return (
        <Flex flex={1} bg="secondaryGray.400" gap={3} w="100%" direction={['column', 'row', 'row', 'row']}>
            <Box
                position="relative"
                overflow="hidden"
                minHeight={{ sm: '15rem', md: '15rem' }}
                w={{ sm: '100%', md: '30rem', lg: '40rem' }}
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
            <Box p={3}>
                <Box color="blackAlpha.800">
                    <Box
                        fontSize="2xl"
                        fontWeight="bold"
                        _hover={{
                            color: 'brand.300',
                            cursor: 'pointer',
                        }}
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
                    voluptatem quos voluptas voluptate quas quibusdam, quia, quod voluptatem quos voluptas voluptate
                    quas
                </Text>
            </Box>
        </Flex>
    );
};
