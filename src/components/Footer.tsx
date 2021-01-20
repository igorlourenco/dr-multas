import React from 'react'
import { Box, SimpleGrid, Image, Text, Stack, Link } from '@chakra-ui/react'
import { brandColor, brandName, siteLink } from '../consts'

const Footer = () => {
  return (
        <Box p={4} backgroundColor={`${brandColor}.800`} color={'white'}>
            <SimpleGrid columns={{ base: 1, md: 3 }} display={'flex'}
                        flexDirection={['column', 'column', 'row', 'row']} spacing={10}
                        alignItems={'center'}>

                <Stack display={['none', 'none', 'block', 'block']}>
                    <Image src={'/DoutorMultas.png'} width={['200px', '200px', '500px', '500px']}/>
                </Stack>

                <Stack as={'iframe'} borderRadius={'md'}
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125632.60750117345!2d-48.41727491834098!3d-10.260052196746505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933b3439911f1257%3A0x93b8070d05c818f!2sPalmas%2C%20TO!5e0!3m2!1spt-BR!2sbr!4v1611165883405!5m2!1spt-BR!2sbr"
                       width={['90vw', '90vw', '100%', '100%']} height="100%" frameBorder="0"/>

            <Stack width={'100%'}>
                <Link fontWeight={'bold'} href={siteLink}>&copy; 2021 {brandName}</Link>
                <Text fontWeight={'medium'}>
                    63 9 9113 9344
                </Text>
                <Text fontWeight={'medium'}>
                    Rua 22, Quadra 214, Lote 12 - 103 Norte
                </Text>
                <Text fontWeight={'medium'}>
                    Segunda à Sexta, das 8h às 18
                </Text>
            </Stack>

        </SimpleGrid>
</Box>
  )
}

export default Footer
