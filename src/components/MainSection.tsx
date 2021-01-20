import React from 'react'

import {
  Box,
  Button,
  Image,
  Text,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'
import { brandColor, mainSectionButtonMessage, mainSectionImage, mainSectionText } from '../consts'
import { IoMdArrowRoundForward } from 'react-icons/io'

const MainSection = () => {
  const heroHeight = useBreakpointValue({ base: '380px', md: '530px' })
  const ctaSize = useBreakpointValue({ base: 'md', md: 'lg' })
  const heroTextSize = useBreakpointValue({ base: '2xl', md: '4xl' })
  const heroTextPaddingX = useBreakpointValue({ base: '1rem', md: '3.5rem' })

  return (
        <Box w={'full'} pos={'relative'} h={heroHeight}>
            <Image
                src={mainSectionImage}
                alt={'hero image'}
                w={'100%'}
                h={'100%'}
                objectFit={'cover'}
            />
            <Stack
                align={'start'}
                pos={'absolute'}
                top={'0'}
                h={'100%'}
                w={'100%'}
                justifyContent={'center'}
                spacing={6}
                px={heroTextPaddingX}
                bg={
                    'linear-gradient(0.25turn, rgba(160, 164, 192, 0.7), rgba(0,0,0,0))'
                }>
                <Box maxW={{ base: 'sm', sm: 'md', md: 'lg' }}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={heroTextSize}>
                        {mainSectionText}
                    </Text>
                </Box>
                <Button colorScheme={brandColor} rightIcon={<Box as={IoMdArrowRoundForward}/>} size={ctaSize}
                        borderRadius={'2xl'}>
                    {mainSectionButtonMessage}
                </Button>
            </Stack>
        </Box>
  )
}

export default MainSection
