import { Container, Flex, SimpleGrid, Text, chakra } from '@chakra-ui/react';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import BlogListItem from '@/components/Blog/BlogListItem';
import BlogLoadingSkeleton from '@/components/Skeleton/BlogLoadingSkeleton';
import BlogRightSide from '@/components/Blog/BlogRightSide';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ISingleBlog, getAllBlogs } from '@/API/blogAPIServices';
import BlogHeroSection from '@/components/Blog/BlogHeroSection';

const LandingPage = () => {
    const [blogsPerPage, _] = useState<number>(3);
    const [blogs, setBlogs] = useState<ISingleBlog[]>([]);
    const queryClient = useQueryClient();
    const blogListsEndRef = useRef<HTMLDivElement>(null);

    // Here we are using react-query to fetch the blogs
    const { isLoading, isRefetching } = useQuery(['blogs'], async () => await getAllBlogs(), {
        onSuccess(data) {
            // Here the API endpoints is not configured for pagination, so we have to manually slice the data
            setBlogs((prev) => [...prev, ...data.data.slice(prev.length, blogsPerPage + prev.length)]);
        },
    });

    // Handeling auto fetch more blogs when user scroll to the end of the page
    useEffect(() => {
        // Here we are using IntersectionObserver API to detect when user scroll to the end of the page
        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                // Here we are checking if the target element is intersecting with the viewport
                const target = entries[0];
                if (target.isIntersecting) {
                    queryClient.refetchQueries(['blogs']);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 1.0,
            }
        );

        // Here we are observing the target element
        if (blogListsEndRef.current) {
            observer.observe(blogListsEndRef.current);
        }

        // Here we are unobserving the target element
        return () => {
            if (blogListsEndRef.current) {
                observer.unobserve(blogListsEndRef.current);
            }
        };
    }, [blogListsEndRef]);

    return (
        <Fragment>
            <BlogHeroSection />
            <Container maxW="container.xl" as="section" my={5}>
                <SimpleGrid templateColumns={{ sm: '1fr', md: '1.5fr 1fr', '2xl': '1.5fr 1fr' }} gap={2}>
                    <Flex direction="column" gap={4} w="100%">
                        <Text bg="blackAlpha.900" textAlign="center" p={3} fontSize="2xl" color="white">
                            Latest
                        </Text>

                        {blogs.map((_, i) => (
                            <BlogListItem key={i} />
                        ))}

                        <chakra.span ref={blogListsEndRef} />

                        {(isLoading || isRefetching) && <BlogLoadingSkeleton />}
                    </Flex>

                    <BlogRightSide showPopular />
                </SimpleGrid>
            </Container>
        </Fragment>
    );
};

export default LandingPage;
