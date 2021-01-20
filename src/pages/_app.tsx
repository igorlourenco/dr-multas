import React from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../style/theme'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider resetCSS theme={theme}>
          <DefaultSeo {...SEO}/>
          <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp
