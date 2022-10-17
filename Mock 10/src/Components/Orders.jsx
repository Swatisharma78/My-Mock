import React from 'react'
import {
  Tbody,
  RadioGroup,
  Table,
  Tr,
  Th,
  Button,
  TableContainer,
  Thead,
  Radio,
  TableCaption,
  Input,
  Td,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';

const Orders = () => {
  const dispatch = useDispatch();
  const { login, token, restaurant, cart } = useSelector((state) => state.admin);
  console.log(cart);

  var totalPrice = cart.reduce((acc, ele) => { return acc + (ele.price* ele.qty) }, 0) * 1.18;

  const handleDelete = (e) => {
    let temp = cart.filter((el) => el.id !== e);
    dispatch({ type: 'DELETE', payload: temp })
  }
  const handleIncrease = (e) => {
    let temp = cart.map((el) => {
      if (el.id == e) {
        let pr = el.price/ el.qty;
        el.qty += 1
        el.price= pr * el.qty
      }
      return el
    });
    dispatch({type: 'INCREASE', payload: temp })

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
        el.price = pr * el.qty
      }
      return el
    });
    if (a == 0) {
      dispatch({type: 'DECREASE', payload: temp })
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
              <Th>Product title</Th>
              <Th>Brand</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
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
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: 'left', margin: 'auto', padding: '30px' }}>
        <h5><b>Total Price :</b> {(totalPrice * 1.18).toFixed(2)}</h5>
      </div>
    </div>
  )
}

export default Orders;