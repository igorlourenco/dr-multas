import React from 'react'
import {
  Box, BoxProps, Grid, Stack,
  Heading
} from '@chakra-ui/react'
import { author, brandColor, deposition } from '../consts'

const Depositions = (props: BoxProps) => {
  return (
        <Box w={'full'} backgroundColor={`${brandColor}.800`} height={'auto'} p={5} {...props}>
            <Heading display={'flex'} justifyContent={'center'} color={'white'}>
                O que os clientes estão falando
            </Heading>
            <Grid
                p={10}
                gap={6}
                templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
                m={0}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Stack color={'gray.700'} spacing={2} minHeight={'250px'}
                       width="350px" backgroundColor={'white'} borderRadius={'md'} shadow={'2xl'}
                       padding={5} justifyContent={'space-around'} justifySelf={'center'}>
                    <Heading size={'md'} textAlign="justify" letterSpacing="tighter" fontWeight={400}>
                        {`"${deposition}"`}
                    </Heading>
                    <Heading size={'sm'} fontWeight="bold" textAlign="left">
                        {author}
                    </Heading>
                </Stack>
                <Stack color={'gray.700'} spacing={2} minHeight={'250px'}
                       width="350px" backgroundColor={'white'} borderRadius={'md'} shadow={'2xl'}
                       padding={5} justifyContent={'space-around'} justifySelf={'center'}>
                    <Heading size={'md'} textAlign="justify" letterSpacing="tighter" fontWeight={400}>
                        {`"${deposition}"`}
                    </Heading>
                    <Heading size={'sm'} fontWeight="bold" textAlign="left">
                        {author}
                    </Heading>
                </Stack>
                <Stack color={'gray.700'} spacing={2} minHeight={'250px'}
                       width="350px" backgroundColor={'white'} borderRadius={'md'} shadow={'2xl'}
                       padding={5} justifyContent={'space-around'} justifySelf={'center'}>
                    <Heading size={'md'} textAlign="justify" letterSpacing="tighter" fontWeight={400}>
                        {`"${deposition}"`}
                    </Heading>
                    <Heading size={'sm'} fontWeight="bold" textAlign="left">
                        {author}
                    </Heading>
                </Stack>
            </Grid>
        </Box>
  )
}

export default Depositions
