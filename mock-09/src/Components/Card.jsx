import React, { useState } from "react";
import {FcRating} from"react-icons/fc";
import {BsFillHandThumbsUpFill} from"react-icons/bs";
import { Box,Button ,Image,Text,Flex} from "@chakra-ui/react";
const Card=({resturant}) => {
  console.log(resturant)
  return (
<Box boxShadow={"3px 5px 10px #888888"} margin={5}  width={"250px"} padding={2} borderRadius={4} key={resturant.id}> 
      <Image src={resturant.image} width={"250px"} alt="alt"/>
      <Text fontSize={"3xl"}>{resturant.name}</Text>
      <Flex><Button ml={"50px"} variant="solid">Type:{resturant.type}</Button></Flex>
      <Flex>
        <Button mt={"10px"} ml={"15px"} variant="solid"><BsFillHandThumbsUpFill color="red"/>{resturant.number_of_votes}</Button>
        <Button mt={"10px"} variant="outline">Rs.{resturant.price_starts_from}</Button>
        <Button mt={"10px"} variant="solid"><FcRating/>{resturant.rating}</Button>
      </Flex>   
      <Button color={"white"} backgroundColor={"navy"} mt={"30px"} _hover="red" >Add to cart</Button> 
</Box>
  );
};
export default Card;