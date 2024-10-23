import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'  
import ProductCard from './components/ProductCard'
import CreatePage from './Pages/CreatePage'


function App() {


  return (
    <>
     <Box minH={"100vh"} bg={useColorModeValue('gray.100',"gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />

      </Routes>
     </Box>
    </>
  )
}

export default App
