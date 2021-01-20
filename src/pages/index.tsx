import React from 'react'
import MainSection from '../components/MainSection'
import About from '../components/About'
import Header from '../components/Header'
import { Flex } from '@chakra-ui/layout'
import Depositions from '../components/Depositions'

const App = () => {
  return (
        <Flex direction={'column'}>
            <Header/>
            <MainSection/>
            <About/>
            <Depositions/>
        </Flex>
  )
}

export default App
