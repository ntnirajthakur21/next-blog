import BlogRightSide from '@/components/Blog/BlogRightSide';
import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

const BlogPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SimpleGrid templateColumns={{ sm: '1fr', md: '1.5fr 1fr', '2xl': '1.5fr 1fr' }} gap={2} my={2}>
            {children}
            <BlogRightSide showPopular />
        </SimpleGrid>
    );
};

export default BlogPageLayout;
