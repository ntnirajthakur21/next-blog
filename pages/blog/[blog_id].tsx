import { Box, Container, Text, Flex, Tag, Button } from '@chakra-ui/react';
import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBlogComments, getSingleBlog } from '@/API/blogAPIServices';
import BlogComment from '@/components/Blog/BlogComment';
import Link from 'next/link';
import CommentForm from '@/components/Blog/CommentForm';
import BlogPageLayout from '@/components/Layout/BlogPageLayout/BlogPageLayout';
import { SEO } from '@/components/SEO';

const BlogDetail = () => {
    const router = useRouter();
    const { blog_id } = router.query;
    const queryClient = useQueryClient();

    // Here we are using react-query to fetch the blog comments
    const blogCommentsQuery = useQuery(
        ['get-blog-comments', blog_id as string],
        async () => await getBlogComments(blog_id as string),
        {
            // Here we are disabling the query if the blog id is not available
            enabled: blog_id !== undefined && typeof blog_id === 'string',
        }
    );

    // Here we are using react-query to fetch the blog content
    const { isSuccess, data } = useQuery(
        ['get-blog-content', blog_id as string],
        async () => {
            console.log('blog id', blog_id);
            return await getSingleBlog(blog_id as string);
        },
        {
            // Here we are disabling the query if the blog id is not available
            enabled: blog_id !== undefined && typeof blog_id === 'string',
        }
    );

    // Here we are prefetching the data for the next page
    useEffect(() => {
        if (blog_id !== undefined && typeof blog_id === 'string') {
            queryClient.prefetchQuery(['get-blog-content', blog_id as string]);
            queryClient.prefetchQuery(['get-blog-comments', blog_id as string]);
        }
    }, [blog_id]);

    return (
        <Fragment>
            <SEO title={`${data?.data?.title} | Next Blog`} description={data?.data?.body.slice(0, 100)} />
            <Container maxW="container.xl" as="section" my={5}>
                <Flex
                    w="100%"
                    minHeight="15rem"
                    bg="brand.100"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    gap={3}
                >
                    <Box textAlign="center">
                        <Text fontSize="6xl" color="blackAlpha.700" fontWeight="bold">
                            Blog Detail
                        </Text>
                    </Box>

                    <Flex gap={2} alignItems="center" fontSize="2xl">
                        Home
                    </Flex>
                </Flex>

                <BlogPageLayout>
                    <Box width="100%" bg="blackAlpha.100" p={3}>
                        <Box
                            width="100%"
                            height={{
                                base: '15rem',
                                sm: '20rem',
                                md: '25rem',
                                lg: '30rem',
                                xl: '35rem',
                                '2xl': '40rem',
                            }}
                            position="relative"
                            overflow="hidden"
                            my={3}
                        >
                            <Image
                                // Here we are using the blog id as the seed for the image
                                src={`https://picsum.photos/seed/${blog_id}/500/500`}
                                layout="fill"
                                objectFit="cover"
                                alt="blog 1"
                            />
                        </Box>
                        <Tag colorScheme="green" size="lg" variant="solid">
                            Blog
                        </Tag>

                        <Text fontSize="2xl" fontWeight="bold" lineHeight={2}>
                            {data?.data?.title}
                        </Text>

                        <Flex fontSize="sm" fontWeight="bold" color="blackAlpha.600" gap={3} my={5}>
                            <Text>12/12/2021</Text>
                            <Text>Admin</Text>
                        </Flex>

                        {isSuccess && (
                            <Box>
                                <Text as="p">{data?.data?.body}</Text>
                            </Box>
                        )}

                        <Flex justifyContent="space-between" alignItems="center" my={3}>
                            {Number(blog_id) > 1 && (
                                <Button
                                    variant="dark"
                                    px={5}
                                    py={3}
                                    leftIcon={<AiOutlineArrowLeft />}
                                    as={Link}
                                    href={`/blog/${Number(blog_id) - 1}`}
                                >
                                    Prev
                                </Button>
                            )}

                            {Number(blog_id) < 100 && (
                                <Button
                                    variant="dark"
                                    px={5}
                                    py={3}
                                    rightIcon={<AiOutlineArrowRight />}
                                    as={Link}
                                    href={`/blog/${Number(blog_id) + 1}`}
                                >
                                    Next
                                </Button>
                            )}
                        </Flex>

                        {blogCommentsQuery.isSuccess && (
                            <Box my={5}>
                                <Text fontWeight="bold" fontSize="2xl">
                                    {blogCommentsQuery.data?.data?.length} Comments
                                </Text>

                                <Flex direction="column" gap={3}>
                                    {blogCommentsQuery.data?.data?.map((comment) => (
                                        <BlogComment key={comment.id} {...comment} />
                                    ))}
                                </Flex>
                            </Box>
                        )}

                        <Box mt={5}>
                            <Text fontWeight="bold" fontSize="2xl">
                                Post a comment
                            </Text>
                            <CommentForm postId={Number(blog_id)} />
                        </Box>
                    </Box>
                </BlogPageLayout>
            </Container>
        </Fragment>
    );
};

export default BlogDetail;
