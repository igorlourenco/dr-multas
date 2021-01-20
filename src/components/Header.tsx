import React from 'react'
import {
  Box,
  Flex,
  HStack,
  Link,
  Heading,
  Menu,
  useDisclosure,
  Stack, LinkProps
} from '@chakra-ui/react'
import { brandColor, brandName } from '../consts'
import { AiOutlineMenu } from 'react-icons/ai'

const Links = [
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'Contato', href: '/#contato' },
  { label: 'Direito do trânsito', href: '/direito-do-transito' }
]

const NavLink = (props: LinkProps) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{ textDecoration: 'none', bg: `${brandColor}.700` }}
        {...props}>
        {props.children}
    </Link>
)

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
        <Box bg={`${brandColor}.900`} px={4} color={'white'}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box
                    as={AiOutlineMenu}
                    aria-label={'Open Menu'}
                    display={{ md: !isOpen ? 'none' : 'inherit' }}
                    onClick={isOpen ? onClose : onOpen}
                >X</Box>
                <HStack spacing={8} alignItems={'center'}>
                    <Box><Heading size={'mds'}>{brandName}</Heading></Box>
                </HStack>
                <Flex alignItems={'center'}>
                    <Menu>
                        <HStack
                            as={'nav'}
                            spacing={8}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
                            ))}
                        </HStack>
                    </Menu>
                </Flex>
            </Flex>

            {isOpen
              ? (
                    <Box pb={4}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                )
              : null}
        </Box>
  )
}

export default Header
