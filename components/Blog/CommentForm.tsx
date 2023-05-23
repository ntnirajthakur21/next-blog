import React, { useEffect } from 'react';
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
    useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { IAddCommentPayload, addComment } from '@/API/blogAPIServices';
import { yupResolver } from '@hookform/resolvers/yup';
import createCommentFormValidatonSchema from '@/utils/createCommentFormValidatonSchema';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const CommentForm = ({ postId }: { postId: number }) => {
    const toast = useToast();
    const queryClient = useQueryClient();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<IAddCommentPayload>({
        resolver: yupResolver(createCommentFormValidatonSchema),
        defaultValues: {
            postId: 1,
        },
    });

    const { mutate, isError, isLoading } = useMutation(
        ['create-comment'],
        async (payload: IAddCommentPayload) => await addComment(payload),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['get-blog-comments', postId]);
                reset();
                toast({
                    title: 'Comment added successfully',
                    description: "We've added your comment successfully.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });
            },
            onError: () => {
                toast({
                    title: 'Comment adding failed',
                    description: "We've failed to add your comment.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                });
            },
        }
    );

    const handleSubmitForm = handleSubmit(async (payload: IAddCommentPayload) => {
        await mutate(payload);
    });

    return (
        <Box as="form" mt={3} onSubmit={handleSubmitForm}>
            <Grid templateRows="repeat(4, 1fr)" templateColumns="repeat(2, 1fr)" columnGap={4} rowGap={2}>
                <GridItem
                    colSpan={{
                        sm: 2,
                        md: 1,
                    }}
                >
                    <FormControl
                        textAlign="left"
                        borderRadius="0rem"
                        isInvalid={errors.firstName?.message?.length! > 0}
                    >
                        <FormLabel>First Name</FormLabel>
                        <InputGroup bg="gray.50" size="lg">
                            <Input type="text" placeholder="Enter your first name" {...register('firstName')} />
                        </InputGroup>
                        {errors.firstName?.message?.length! > 0 && (
                            <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
                        )}
                    </FormControl>
                </GridItem>

                <GridItem
                    colSpan={{
                        sm: 2,
                        md: 1,
                    }}
                >
                    <FormControl textAlign="left" borderRadius="0rem" isInvalid={errors.lastName?.message?.length! > 0}>
                        <FormLabel>Last Name</FormLabel>
                        <InputGroup bg="gray.50" size="lg">
                            <Input type="text" placeholder="Enter your last name" {...register('lastName')} />
                        </InputGroup>
                        {errors.lastName?.message?.length! > 0 && (
                            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
                        )}
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                    <FormControl textAlign="left" borderRadius="0rem" isInvalid={errors.email?.message?.length! > 0}>
                        <FormLabel>Email</FormLabel>
                        <InputGroup bg="gray.50" size="lg">
                            <Input type="text" placeholder="Enter your email" {...register('email')} />
                        </InputGroup>
                        {errors.email?.message?.length! > 0 && (
                            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                        )}
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                    <FormControl textAlign="left" borderRadius="0rem" isInvalid={errors.body?.message?.length! > 0}>
                        <FormLabel>Comment</FormLabel>
                        <InputGroup bg="gray.50" size="lg">
                            <Textarea
                                w="100%"
                                borderRadius="0rem"
                                size="lg"
                                placeholder="Write something..."
                                {...register('body')}
                            />
                        </InputGroup>
                        {errors.body?.message?.length! > 0 && (
                            <FormErrorMessage>{errors.body?.message}</FormErrorMessage>
                        )}
                    </FormControl>
                </GridItem>

                <GridItem>
                    <Button variant="dark" type="submit">
                        {isError ? 'Retry' : isLoading ? 'Posting...' : 'Post'}
                    </Button>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default CommentForm;
