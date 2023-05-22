import {
    Box,
    Container,
    Text,
    Flex,
    SimpleGrid,
    Stack,
    Icon,
    Tag,
    Button,
    Avatar,
    Show,
    Grid,
    GridItem,
    FormControl,
    FormLabel,
    InputGroup,
    Input,
    FormErrorMessage,
    Textarea,
} from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { category } from '..';
import { useRouter } from 'next/router';
import { AiOutlineRight } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const BlogDetail = () => {
    const router = useRouter();
    return (
        <Fragment>
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
                        Home / Blog / Blog Detail
                    </Flex>
                </Flex>

                <SimpleGrid templateColumns={{ sm: '1fr', md: '1.5fr 1fr', '2xl': '1.5fr 1fr' }} gap={2}>
                    <Box w="100%">
                        <Text bg="blackAlpha.900" textAlign="center" p={3} fontSize="2xl" color="white">
                            Latest
                        </Text>
                        <Box w="100%" minH={{ sm: '30rem', md: '30rem' }} position="relative" overflow="hidden" my={3}>
                            <Image
                                src="/blog2.jpg"
                                layout="fill"
                                objectFit="cover"
                                alt="blog 1"
                                style={{
                                    transition: 'all 0.3s linear',
                                }}
                            />
                        </Box>
                        <Tag colorScheme="green" size="lg" variant="solid">
                            Blog
                        </Tag>

                        <Text fontSize="2xl" fontWeight="bold" lineHeight={2}>
                            Lorem ipsum dolor sit amet consectetur
                        </Text>

                        <Flex fontSize="sm" fontWeight="bold" color="blackAlpha.600" gap={3} my={5}>
                            <Text>12/12/2021</Text>
                            <Text>12/12/2021</Text>
                        </Flex>

                        <Box>
                            <Text as="p">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nostrum quae libero
                                repudiandae, atque odio earum optio quis rem. Est esse voluptatibus eos saepe, ab
                                placeat ipsa ut qui fugiat facere non error delectus beatae sunt sed harum. Deleniti
                                consequuntur ducimus a, architecto hic necessitatibus pariatur rerum magni laborum
                                obcaecati quisquam est quis perferendis suscipit doloremque, voluptatum nostrum maiores
                                facere sit. Sequi ex ullam itaque iste veniam distinctio, nam quidem minus molestias
                                mollitia earum id provident nobis modi animi dolorem doloribus. Reprehenderit maxime
                                maiores provident explicabo asperiores sit accusantium consequatur omnis beatae tenetur
                                ut saepe placeat quos iure, earum eaque doloribus sunt distinctio? Sunt pariatur
                                voluptate officia maiores dolore ratione tempora rerum corporis architecto velit nam
                                nobis voluptatibus alias quidem est dolores obcaecati praesentium explicabo modi,
                                laudantium placeat! Cum id eum recusandae a iste soluta accusantium sed dolorem nulla
                                sapiente laboriosam saepe eaque magni asperiores ipsa at ducimus voluptatum maiores
                                tenetur voluptate atque, amet aperiam? Odit consequatur nostrum fuga est libero alias
                                aperiam quibusdam, deserunt delectus soluta. Quae tempora repellat sint totam vel quod
                                obcaecati nemo! Itaque consequatur suscipit, eaque veritatis minus doloribus eveniet
                                impedit magni est quam neque dicta accusamus sequi laborum facilis voluptas unde
                                adipisci distinctio omnis molestiae laboriosam natus officia. Totam reprehenderit
                                eveniet cumque suscipit possimus, porro explicabo quidem aspernatur, illum nostrum,
                                obcaecati recusandae? Cum quidem consequuntur ipsa porro quia sequi officiis, vel labore
                                voluptatibus et. Eos dicta eligendi minima numquam fugiat, dolorum aut repellat beatae
                                vero natus. Quo, quos voluptas obcaecati officia eligendi doloribus itaque id?
                            </Text>
                        </Box>

                        <Flex justifyContent="space-between" alignItems="center" my={3}>
                            <Button variant="dark" px={5} py={3} leftIcon={<AiOutlineArrowLeft />}>
                                Prev
                            </Button>

                            <Button variant="dark" px={5} py={3} rightIcon={<AiOutlineArrowRight />}>
                                Next
                            </Button>
                        </Flex>

                        <Box my={5}>
                            <Text fontWeight="bold" fontSize="2xl">
                                3 Comments
                            </Text>

                            <Flex direction="column" gap={3}>
                                {Array(3)
                                    .fill(0)
                                    .map((_, i) => (
                                        <Flex gap={3} p={3}>
                                            <Show above="sm">
                                                <Avatar
                                                    name="Dan Abrahmov"
                                                    size="xl"
                                                    src="https://bit.ly/dan-abramov"
                                                />
                                            </Show>
                                            <Box>
                                                <Text fontSize="xl" fontWeight="bold" lineHeight="1">
                                                    Dan Abrahmov
                                                </Text>
                                                <Text color="blackAlpha.600">December 4, 2017 at 3:12 pm</Text>

                                                <Text fontSize="md" my="2">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eaque
                                                    aperiam voluptatibus provident repellat praesentium quia, ducimus
                                                    obcaecati vel suscipit.
                                                </Text>
                                            </Box>
                                        </Flex>
                                    ))}
                            </Flex>
                        </Box>

                        <Box mt={5}>
                            <Text fontWeight="bold" fontSize="2xl">
                                Post a comment
                            </Text>
                            <Box as="form" mt={3}>
                                <Grid
                                    templateRows="repeat(4, 1fr)"
                                    templateColumns="repeat(2, 1fr)"
                                    columnGap={4}
                                    rowGap={2}
                                >
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
                                                <Textarea
                                                    w="100%"
                                                    borderRadius="0rem"
                                                    size="lg"
                                                    placeholder="Write something..."
                                                />
                                            </InputGroup>
                                            <FormErrorMessage>Field is required</FormErrorMessage>
                                        </FormControl>
                                    </GridItem>

                                    <GridItem>
                                        <Button variant="dark">Post</Button>
                                    </GridItem>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Text bg="blackAlpha.900" textAlign="center" p={3} fontSize="2xl" color="white">
                            Categories
                        </Text>

                        <Stack>
                            {category.map(({ slug, name }, i) => {
                                return (
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
                                );
                            })}
                        </Stack>
                    </Box>
                </SimpleGrid>
            </Container>
        </Fragment>
    );
};

export default BlogDetail;
