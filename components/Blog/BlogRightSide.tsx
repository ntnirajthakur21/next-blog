import React from 'react';
import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { AiOutlineRight } from 'react-icons/ai';
import BlogItemSM from './BlogItemSM';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {
    showPopular?: boolean;
};

const BlogRightSide = ({ showPopular = false }: Props) => {
    const router = useRouter();
    return (
        <Box as="aside">
            <Text bg="blackAlpha.900" textAlign="center" p={3} fontSize="2xl" color="white">
                Categories
            </Text>

            <Stack>
                {category.map(({ slug, name }, i) => {
                    return (
                        <Flex
                            key={i}
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
                    );
                })}
            </Stack>

            {showPopular && (
                <Box as="div">
                    <Text bg="blackAlpha.900" textAlign="center" p={3} fontSize="2xl" color="white" mt={5}>
                        Most Popular
                    </Text>

                    <Stack>
                        {Array(5)
                            .fill(0)
                            .map((_, i) => (
                                <BlogItemSM key={i} id={i + 1} />
                            ))}
                    </Stack>
                </Box>
            )}
        </Box>
    );
};

export default BlogRightSide;

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
