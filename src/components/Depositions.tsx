import React from 'react'
import {
  Box, Grid, Stack,
  Heading
} from '@chakra-ui/react'
import { author, brandColor, deposition } from '../consts'

const Depositions = () => {
  return (
        <Box w={'full'} backgroundColor={`${brandColor}.800`} height={'auto'}>
            <Grid
                p={10}
                gap={6}
                templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
                m={0}
            >
                <Stack color={'gray.700'} spacing={2} minHeight={'250px'}
                       width="350px" backgroundColor={'white'} borderRadius={'md'} shadow={'2xl'}
                       padding={5}>
                    <Heading size={'md'} textAlign="justify" letterSpacing="tigher">
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
