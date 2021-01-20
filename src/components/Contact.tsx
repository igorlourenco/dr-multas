import React from 'react'

import {
  Box,
  Button,
  Image,
  Text,
  useBreakpointValue, Stack, BoxProps
} from '@chakra-ui/react'
import { brandColorHex, contactImage, contactText, instagramLink, whatsappLink } from '../consts'
import { convertHexToRGBA } from '../helpers'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Contact = (props: BoxProps) => {
  const heroHeight = useBreakpointValue({ base: '180px', md: '330px' })
  const ctaSize = useBreakpointValue({ base: 'md', md: 'lg' })
  const heroTextSize = useBreakpointValue({ base: '2xl', md: '4xl' })
  const heroTextPaddingX = useBreakpointValue({ base: '1rem', md: '3.5rem' })

  return (
        <Box w={'full'} pos={'relative'} h={heroHeight} {...props}>
            <Image
                src={contactImage}
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
                alignItems={'center'}
                spacing={6}
                px={heroTextPaddingX}
                bg={
                    `linear-gradient(0.25turn, ${convertHexToRGBA(brandColorHex, 20)}, rgba(0,0,0,0))`
                }>
                <Box>
                    <Text
                        color={'#333'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={heroTextSize}>
                        {contactText}
                    </Text>
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Box as={'a'} target={'_blank'} href={instagramLink} margin={2} width={'100%'} display={'flex'} flexDirection={'column'}
                         alignItems={'center'} justifyContent={'center'}>
                        <Button backgroundColor={'#c13584'} color={'white'} _hover={{ backgroundColor: '#e1306c' }}
                                leftIcon={<Box as={FaInstagram}/>} size={ctaSize}
                                borderRadius={'2xl'}>
                            Fazer consultoria via Instagram
                        </Button>
                    </Box>

                    <Box as={'a'} target={'_blank'} href={whatsappLink} margin={2} width={'100%'} display={'flex'} flexDirection={'column'}
                         alignItems={'center'} justifyContent={'center'}>
                        <Button backgroundColor={'#128c7e'} color={'white'} _hover={{ backgroundColor: '#25d366' }}
                                leftIcon={<Box as={FaWhatsapp}/>} size={ctaSize}
                                borderRadius={'2xl'}>
                            Consultar caso via WhatsApp
                        </Button>
                    </Box>

                </Box>
            </Stack>
        </Box>
  )
}

export default Contact
