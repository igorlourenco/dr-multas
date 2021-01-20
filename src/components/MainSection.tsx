import React from 'react'

import {
  Box,
  Button,
  Image,
  Text,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'
import {
  brandColor,
  brandColorHex,
  mainSectionButtonMessage,
  mainSectionImage,
  mainSectionText,
  whatsappLink
} from '../consts'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { convertHexToRGBA } from '../helpers'

const MainSection = () => {
  const ctaSize = useBreakpointValue({ base: 'md', md: 'lg' })
  const heroTextSize = useBreakpointValue({ base: '2xl', md: '4xl' })
  const heroTextPaddingX = useBreakpointValue({ base: '1rem', md: '3.5rem' })

  return (
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
                bg={convertHexToRGBA(brandColorHex, 20)}>
                <Box maxW={{ base: 'sm', sm: 'md', md: 'lg' }}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={heroTextSize}>
                        {mainSectionText}
                    </Text>
                </Box>
                <Button colorScheme={brandColor} as={'a'} href={whatsappLink} target={'_blank'} rightIcon={<Box as={IoMdArrowRoundForward}/>} size={ctaSize}
                        borderRadius={'2xl'}>
                    {mainSectionButtonMessage}
                </Button>
            </Stack>
        </Box>
  )
}

export default MainSection
