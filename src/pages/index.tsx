import React from 'react'

import Header from '../components/Header'
import MainSection from '../components/MainSection'
import About from '../components/About'
import Depositions from '../components/Depositions'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Flex } from '@chakra-ui/layout'

const App = () => {
  return (
        <Flex direction={'column'}>
            <Header/>
            <MainSection/>
            <About id={'sobre'}/>
            <Depositions id={'depoimentos'}/>
            <Contact id={'contato'}/>
            <Footer/>
        </Flex>
  )
}

export default App
