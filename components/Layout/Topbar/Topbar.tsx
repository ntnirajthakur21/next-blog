import React from 'react';
import Link from 'next/link';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const TopBar = () => {
    return (
        <Flex w="100%" bg="brandScheme.200">
            <Flex
                wrap="wrap"
                my="0.25rem"
                lineHeight="1"
                mx="auto"
                gap={['1rem']}
                w="90%"
                justify="space-between"
                alignItems="center"
                maxWidth="1200px"
                py={2}
            >
                <Flex
                    wrap="wrap"
                    color="white"
                    gap={['0.5rem', '0.5rem', '18px']}
                    fontSize="2xl"
                    fontWeight="bold"
                    align="center"
                >
                    <Link href="https://faccebook.com/developer.niraj" passHref>
                        <Icon
                            as={FaFacebookF}
                            _hover={{
                                color: 'brand.200',
                                cursor: 'pointer',
                            }}
                        />
                    </Link>
                    <Icon
                        as={FaTwitter}
                        _hover={{
                            color: 'red.300',
                            cursor: 'pointer',
                        }}
                    />
                    <Icon
                        as={FaInstagram}
                        _hover={{
                            color: 'red.300',
                            cursor: 'pointer',
                        }}
                    />
                </Flex>
                <Flex wrap="wrap" color="white" gap={['0.5rem', '0.5rem', '18px']}>
                    <Flex mx="auto" color="white" gap="18px" fontSize="md">
                        <Link href="tel:9815785428" passHref>
                            <Text
                                p="0.4rem 1rem"
                                _hover={{
                                    opacity: '0.8',
                                }}
                            >
                                +977-98000000
                            </Text>
                        </Link>

                        <Link href="mailto:contact@next-blog.com" passHref>
                            <Text
                                p="0.4rem 1rem"
                                _hover={{
                                    opacity: '0.8',
                                }}
                            >
                                contact@next-blog.com
                            </Text>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
0;
export default TopBar;
