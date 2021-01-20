import React from 'react'
import {
  SimpleGrid,
  Flex,
  Heading,
  BoxProps,
  Text,
  Button,
  Stack, Box
} from '@chakra-ui/react'
import { aboutButtonMessage, aboutText, aboutTitle, brandColor, instagramLink } from '../consts'

const About = (props: BoxProps) => {
  return (
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} {...props} py={6}>
          <Stack spacing={8} padding={[10, 8, 7, 2]} width={['100vw', '80vw', '70vw', '60vw']} alignItems={'center'}>
              <Heading size={'2xl'} color={`${brandColor}.800`}>
                  {aboutTitle}
              </Heading>
              <Text fontSize={'xl'} color={'gray.500'}>
                  {aboutText}
              </Text>
              <Stack as={'a'} href={instagramLink} target={'_blank'} direction={{ base: 'column', md: 'row' }} spacing={4}>
                  <Button variant={'outline'} colorScheme={brandColor}>{aboutButtonMessage}</Button>
              </Stack>
          </Stack>
      </Box>
  )
}

export default About
