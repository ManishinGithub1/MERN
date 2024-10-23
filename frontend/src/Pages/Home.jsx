import {React,useEffect} from 'react'
import { Container,VStack,Text, SimpleGrid } from '@chakra-ui/react'  
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/Product'
import ProductCard  from '../components/ProductCard'

const Home = () => {
  const {fetchProducts,products}= useProductStore();

  useEffect(()=>{
    fetchProducts();
  },[fetchProducts]);
  console.log("Products", products);
  return (
    <Container maxW='container.x1' py={12}>
      <VStack spacing={8}>
        <Text fontSize={"30"}
        fontWeight={"bold"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}
        textAlign={"center"}>
          Current Products
          </Text>
          <SimpleGrid columns={{base:1,md:2,lg:3}} spacing={8} w={"full"}>
            {products.map((product)=>(
              <ProductCard key={product._id} product={product}/>
            ))}
          </SimpleGrid>

          {products.length===0 && (<Text fontSize='xl' textAlign={"center"} fontWeight={"bold"}><Text color='red.500'>Oops!</Text> <Text>Seems you need to add some Products {"\n "}</Text>
            <Link to={"/create"}>
             <Text as='span' color='yellow.500' hover= {{textDecoration: "underline"}}>
            Create your Product
            </Text></Link>
          </Text>)}
      </VStack>
    </Container>
  )
}

export default Home