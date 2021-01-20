import React from 'react'
import {
  SimpleGrid,
  Flex,
  Heading,
  Container,
  Text,
  Button,
  Stack
} from '@chakra-ui/react'
import { aboutButtonMessage, aboutText, aboutTitle, aboutImage, brandColor } from '../consts'

const About = () => {
  return (
        <Container maxW={'6xl'}>
            <SimpleGrid py={8} px={4} spacing={6} columns={{ base: 1, md: 2 }}>
                <Stack spacing={8} maxW={{ md: 'xl' }}>
                    <Heading size={'2xl'} color={`${brandColor}.700`}>
                        {aboutTitle}
                    </Heading>
                    <Text fontSize={'xl'} color={'gray.500'}>
                        {aboutText}
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button variant={'outline'} colorScheme={brandColor}>{aboutButtonMessage}</Button>
                    </Stack>
                </Stack>

                <Flex alignItems={'center'} justifyContent={'center'}>
                    <img
                        src={aboutImage}
                        width={400}
                        height={250}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
  )
}

export default About
