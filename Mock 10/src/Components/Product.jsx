import {
  Stack,
  Flex,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import {
  Image,
  useColorMode,
}
  from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getdata, addToCart} from '../Redux/User/Action';

const Product = () => {
  var tkn=JSON.parse(localStorage.getItem('RestauranrUserData'));
  const {token, product, cart } = useSelector((state) => state.admin);
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const { colorMode} = useColorMode();
  const [page, setPage]=useState(1);
  const [sor, setsor] = useState('price_starts_from');
  const [ord, setord] = useState('asc');
  const [fil, setfil] = useState('');
  console.log(cart)
  useEffect(() => {
    if (token === null) {
    }
  }, [token]);

  useEffect(() => {
    dispatch(getdata(page, sor, ord, fil));
  }, [page, sor, ord, fil]);

  const handleCart = (e) => {
    let object = {
      ...e,
      qty: 1,
    };
    dispatch(addToCart(object));
  }
  return (
    <div style={{ display: 'block', margin: 'auto', justifyContent: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', height: '30px', alignItems: 'center' }}>
          <h4><b>Sort By Price :</b>&nbsp; &nbsp; </h4>
          <select
            name="sortBy"
            id="sortBy"
            onChange={(e) => setsor(e.target.value)}
          >
            <option value="price">Select</option>
            <option value="lh">Low to high</option>
            <option value="hl">High to Low</option>
          </select>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', height: '30px', alignItems: 'center' }}>
          <h4><b>Filter By Category:</b>&nbsp; &nbsp; </h4>
          <select
            name="Filtering"
            id="pop"
            onChange={(e) => setfil(e.target.value)}
          >
            <option value="">Select</option>
            <option value="&filter=home_decor">Home decor</option>
            <option value="&filter=women">Women</option>
            <option value="&filter=men">Mens</option>
            <option value="&kids">Kids</option>
          </select>
        </div></div>
      <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '30px', margin: "auto", justifyContent: 'space-around' }}>
        {
          product.map((e, ind) => <div key={ind} >
            <div className="app" style={{ display: 'flex', justifyContent: 'center' }}>
              <Box w="300px" rounded="20px"
                overflow="hidden" bg={colorMode === "dark" ? "gray.700" : "gray.200"} mt={10}>
                <Image src={e.image} alt="img" boxSize="300px">
                </Image>
                <Box p={5}>
                  <Stack mt={3}>
                    <Text>Brand:-{e.brand}</Text>
                    <Text>Title:-{e.title}</Text>
                    <Text>Category:-{e.category}</Text>
                    <Text>Price:-{e.price}</Text>
                    <Button colorScheme='blue'
                      variant='outline'
                      backgroundColor={"navy"}
                      color={"white"}
                      onClick={() => handleCart(e)}
                    > ADD TO CART
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </div>
          </div>
          )
        }
      </div>
      <div>
        <Flex justifyContent='center' marginTop='30px'>
          <Button
            colorScheme='teal'
            variant='outline'
            isDisabled={page == 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </Button>
          <Box
            style={{ padding: '10px 30px' }}
          >
            {page}
          </Box>
          <Button
            colorScheme='teal'
            variant='outline'
            isDisabled={page == 20}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Flex>
      </div>
    </div >
  )
}

export default Product