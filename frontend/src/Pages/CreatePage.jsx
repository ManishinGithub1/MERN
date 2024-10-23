import { Heading,VStack,Box,Container,useColorModeValue,Input,Button,useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useProductStore } from '../store/Product.js'
const CreatePage = () => {
  const [newProduct,setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  })

  const toast = useToast();

  const {createProduct}= useProductStore();

  const handleAddProduct = async() => {
      const {success, message} = await createProduct(newProduct);
    if(!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 8000,
        isClosable: true
      })
    }
    else{
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 8000,
        isClosable: true
      })
    }
     
    setNewProduct({name:"",price:"",image:""});
  }
  
 

  return <Container maxW={"container.sm"}>
    <VStack spacing={8} >
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Create New Product</Heading>
      <Box w={"full"} bg={useColorModeValue("white","gray.800")} 
      p={6} rounded={"lg"} shadow={"md"}>
       <VStack spacing={4}>
          <Input
           placeholder="ProductName"
          name="name"
          type="text"
          value={newProduct.name}
          onChange={(e)=> setNewProduct({...newProduct, name:e.target.value})}/>
          <Input
           placeholder="Price"
          name="price"
          type="number"
          value={newProduct.price}
          onChange={(e)=> setNewProduct({...newProduct, price:e.target.value})}/>
          <Input
           placeholder="Image"
          name="image"
          value={newProduct.image}
          onChange={(e)=> setNewProduct({...newProduct, image:e.target.value})}/>
          <Button colorScheme="green" onClick={handleAddProduct} w='full'>ADD PRODUCT</Button>
          </VStack>
      </Box>
    </VStack>
  </Container>
}

export default CreatePage