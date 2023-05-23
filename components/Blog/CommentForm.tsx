import React from 'react';
import {
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    GridItem,
    Input,
    InputGroup,
    Textarea,
    Button,
} from '@chakra-ui/react';

const CommentForm = () => {
    return (
        <Box as="form" mt={3}>
            <Grid templateRows="repeat(4, 1fr)" templateColumns="repeat(2, 1fr)" columnGap={4} rowGap={2}>
                <GridItem
                    colSpan={{
                        sm: 2,
                        md: 1,
                    }}
                >
                    <FormControl textAlign="left" borderRadius="0rem" isInvalid={false}>
                        <FormLabel>First Name</FormLabel>
                        <InputGroup bg="gray.50" size="lg">
                            <Input type="text" placeholder="Enter your first name" />
                        </InputGroup>
                        <FormErrorMessage>Field is required</FormErrorMessage>
                    </FormControl>
                </GridItem>

                <GridItem
                    colSpan={{
                        sm: 2,
                        md: 1,
                    }}
                >
                    <FormControl textAlign="left" borderRadius="0rem" isInvalid={false}>
                        <FormLabel>Last Name</FormLabel>
                        <InputGroup bg="gray.50" size="lg">
                            <Input type="text" placeholder="Enter your last name" />
                        </InputGroup>
                        <FormErrorMessage>Field is required</FormErrorMessage>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                    <FormControl textAlign="left" borderRadius="0rem" isInvalid={false}>
                        <FormLabel>Email</FormLabel>
                        <InputGroup bg="gray.50" size="lg">
                            <Input type="text" placeholder="Enter your email" />
                        </InputGroup>
                        <FormErrorMessage>Field is required</FormErrorMessage>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                    <FormControl textAlign="left" borderRadius="0rem" isInvalid={false}>
                        <FormLabel>Comment</FormLabel>
                        <InputGroup bg="gray.50" size="lg">
                            <Textarea w="100%" borderRadius="0rem" size="lg" placeholder="Write something..." />
                        </InputGroup>
                        <FormErrorMessage>Field is required</FormErrorMessage>
                    </FormControl>
                </GridItem>

                <GridItem>
                    <Button variant="dark">Post</Button>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default CommentForm;
