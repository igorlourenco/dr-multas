import React from 'react'

import {
  Box,
  Button,
  Image,
  Text,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'
import { brandColor, brandColorHex, mainSectionButtonMessage, mainSectionImage, mainSectionText } from '../consts'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { convertHexToRGBA } from '../helpers'
import Header from '../components/Header'
import Footer from '../components/Footer'

const TransitLaw = () => {
  const ctaSize = useBreakpointValue({ base: 'md', md: 'lg' })
  const heroTextSize = useBreakpointValue({ base: '2xl', md: '4xl' })
  const heroTextPaddingX = useBreakpointValue({ base: '1rem', md: '3.5rem' })

  return (
        <>
            <Header/>
            <Box w={'full'} height={'100vh'} pos={'relative'}>
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
                        `linear-gradient(0.25turn, ${convertHexToRGBA(brandColorHex, 20)}, rgba(0,0,0,0))`
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
            <Footer/>
        </>
  )
}

export default TransitLaw