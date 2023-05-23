import React from 'react';
import { Avatar, Box, Flex, Text, Show } from '@chakra-ui/react';
import { ISingleComment } from '@/API/blogAPIServices';

const BlogComment = ({ email, body }: ISingleComment) => {
    return (
        <Flex gap={3} p={3}>
            <Show above="sm">
                <Avatar
                    name="Dan Abrahmov"
                    size="xl"
                    src={`https://avatars.dicebear.com/api/avataaars/${Math.random()}.svg?mood[]=happy`}
                />
            </Show>
            <Box>
                <Text fontSize="xl" fontWeight="bold" lineHeight="1">
                    {email.split('@')[0]}
                </Text>
                <Text color="blackAlpha.600">December 4, 2017 at 3:12 pm</Text>

                <Text fontSize="md" my="2">
                    {body}
                </Text>
            </Box>
        </Flex>
    );
};

export default BlogComment;
