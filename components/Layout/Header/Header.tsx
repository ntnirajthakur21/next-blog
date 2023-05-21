import React from 'react';
import { Image, Flex, Text, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TopBar } from '..';
import { FaAngleDown } from 'react-icons/fa';

const Header = () => {
    const router = useRouter();
    return (
        <>
            <TopBar />
            <Flex boxShadow="xs" py={['1rem', '1rem', '1rem', '1rem']} w="100%">
                <Flex
                    gap="1rem"
                    direction={['column', 'column', 'column', 'row']}
                    align="center"
                    mx="auto"
                    h={['110%', '110%', '100px', '100px', '3rem']}
                    justify="space-between"
                    w="100%"
                    maxWidth="1200px"
                >
                    <Flex flexDir="column">
                        <Image
                            _hover={{ cursor: 'pointer', filter: `brightness(80%)` }}
                            onClick={() => router.push('/')}
                            h={['2rem', '4rem', '4rem', '4rem']}
                            maxH="4rem"
                            w="auto"
                            alt="ggvisaaLogo"
                            src="/logo.png"
                        />
                    </Flex>

                    <Flex>
                        <Flex wrap="wrap" gap={['1rem', '1rem', '1rem', '18px']} direction="row">
                            <Flex wrap={['wrap', 'nowrap']} mx={['auto']} gap={['1rem', '18px']} direction="row">
                                <NavLink name="Home" path="/" />
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        rightIcon={<FaAngleDown />}
                                        variant="unstyled"
                                        h="min-content"
                                        p="0.25rem 1rem"
                                        borderRadius="0.25rem"
                                        textShadow="0px 0px 9px rgba(18,118,180,0.4)"
                                        _hover={hoverEffect}
                                        _focus={hover}
                                    >
                                        Category
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Tech</MenuItem>
                                        <MenuItem>Programming</MenuItem>
                                        <MenuItem>Internet</MenuItem>
                                    </MenuList>
                                </Menu>
                                <NavLink name="Archive" path="/archive" />
                                <NavLink name="About" path="/about-us" />
                                <NavLink name="Contact" path="/contact" />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Header;

type NavLinkProps = {
    name: string;
    path: string;
};
const NavLink = ({ name, path }: NavLinkProps) => {
    const { pathname } = useRouter();
    return (
        <Link href={path} passHref>
            {pathname.split('/')?.[1] == path.split('/')?.[1] ? (
                <Text
                    as="p"
                    borderRadius="0.25rem"
                    h="min-content"
                    p="0.25rem 1rem"
                    color="white"
                    bg="brand.400"
                    textShadow="0px 0px 9px rgba(18,118,180,0.4)"
                    _hover={hoverEffect}
                    _focus={hover}
                    _active={hover}
                >
                    {name}
                </Text>
            ) : (
                <Text
                    borderRadius="0.25rem"
                    h="min-content"
                    p="0.25rem 1rem"
                    as="p"
                    _hover={hoverEffect}
                    _focus={hover}
                    _active={hover}
                >
                    {name}
                </Text>
            )}
        </Link>
    );
};

const hover = {
    color: 'white',
    bg: 'brand.500',
    cursor: 'pointer',
};
const hoverEffect = {
    color: 'white',
    bg: 'blue.400',
    cursor: 'pointer',
};
