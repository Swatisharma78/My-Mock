import React from 'react'
import {
  Tbody,
  Table,
  Tr,
  Th,
  Button,
  TableContainer,
  Thead,
  TableCaption,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const {cart } = useSelector((state) => state.admin);
  console.log(cart);
  var totalPrice = cart.reduce((acc,ele)=>{ return acc+(ele.price*ele.qty)},0)*1.18;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const verifyOTP = () => { 
     {
      alert("Your Order is Placed successfully !!")
      onClose();
      navigate('/orders')
    }
  }
  const handleDelete = (e) => {
    let temp = cart.filter((el) => el.id !== e);
    dispatch({ type: 'DELETE', payload: temp })
  }
  const handleIncrease = (e) => {
    let temp = cart.map((el) => {
      if (el.id == e) {
        let pr = el.price/ el.qty;
        el.qty += 1
        el.price = pr * el.qty
      }
      return el
    });
    dispatch({ type: 'INCREASE', payload: temp })

  }
  const handleDecrease = (e) => {
    let a = 0
    let temp = cart.map((el) => {
      if (el.id == e && el.qty > 0) {
        if (el.qty - 1 == 0) {
          a++
          handleDelete(el.id)
        }
        let pr = el.price/ el.qty;
        el.qty -= 1
        el.price= pr * el.qty
      }
      return el
    });
    if (a == 0) {
      dispatch({ type: 'DECREASE', payload: temp })
    }
  }
  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>SR.No</Th>
              <Th>Product Title</Th>
              <Th>Brand</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>Increase</Th>
              <Th>Decrease</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              cart?.map((e, ind) => (
                <Tr key={ind}>
                  <Td>{++ind}</Td>
                  <Td>{e.title}</Td>
                  <Td>{e.brand}</Td>
                  <Td>{e.price}</Td>
                  <Td>{e.qty}</Td>
                  <Td>
                    <Button  backgroundColor="green"  color="white" variant='outline' onClick={() => handleIncrease(e.id)}>
                      Increase
                    </Button>
                  </Td>
                  <Td>
                    <Button backgroundColor="red"  color="white" variant='outline' onClick={() => handleDecrease(e.id)}>
                      Decrease
                    </Button>
                  </Td>
                  <Td>
                    <Button backgroundColor="black"  color="white" variant='outline' onClick={() => handleDelete(e.id)}>
                      DELETE
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Button onClick={onOpen}>Place Your Order</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ margin: 'auto' }}>
          <ModalHeader>ORDER Confirm</ModalHeader>
          <ModalCloseButton />
          <Button variant="ghost" backgroundColor="navy"  color="white"  onClick={() => verifyOTP()}>CONFIRM</Button>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Cart