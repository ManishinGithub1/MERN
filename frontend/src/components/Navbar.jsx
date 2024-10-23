import React from 'react'
import { Container, Button,Flex, HStack ,Text} from '@chakra-ui/react'  
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { useColorMode} from "@chakra-ui/react"
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";  

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{base:"column",
            sm:"row"}}
        >
           
       <Text fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
					textAlign={"center"}>
            <Link to={"/"}>Everyone's Store</Link>
        </Text> 
        <HStack spacing={2}
        alignItems={"center"}>
          <Link to={"/create"}><Button><CiSquarePlus fontSize={20} /></Button></Link>
          <Button onClick={toggleColorMode}>
            {colorMode=== "light" ? <IoMoon /> : <LuSun size="20"/>}</Button>
        </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar