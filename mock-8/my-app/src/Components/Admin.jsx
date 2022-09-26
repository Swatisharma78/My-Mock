import React, { useState } from 'react'
import {Box,FormControl,FormLabel, Input, Text} from '@chakra-ui/react'
import { Form, useNavigate } from 'react-router-dom'

const Admin = () => {
  const [mydata, mainfile] = useState();
  const navigate = useNavigate()
const handleChange = (e) => {
  const inputName = e.target.name;
  mainfile({ ...mydata,[inputName]: e.target.value });};
var cartArr = []
const handleSubmit = (e) => {e.preventDefault();
    cartArr.push(mydata);
if(mydata.email==="admin@gmail.com"&& mydata.password==="masai"){ alert("Logged in")
    navigate("/Admin");
        }else{
            alert("Logged out")
        }
    }
return (
   <Box onSubmit={handleSubmit} width={"300px"}margin={"50px auto"} padding="10px" height="350px"  backgroundColor="white" borderRadius={"20px"}>
    <Text fontSize="25px" fontWeight={"bold"}>Login</Text>
   <form>
   <FormControl margin={"20px 0px"} >
   <FormLabel  fontSize="17px" fontWeight={"bold"}  marginLeft="63px" >Enter email</FormLabel>
  <Input marginTop={"20px"}  placeholder='First email' type="email" className="email" value={mydata?.email} name="email" required onChange={handleChange} />
</FormControl>
<FormControl margin={"30px 0px"}>
  <FormLabel fontSize="17px" fontWeight={"bold"}  marginLeft="63px">Enter password</FormLabel>
  <Input marginTop={"20px"}  placeholder='Enter password' type="password" className="password" value={mydata?.password} name="password" required onChange={handleChange} />
  </FormControl>
  <Input padding={"6px 20px"}  fontSize="20px" color={"white"} background="navy" borderRadius={"15px"} className="submitBtn" type="submit" />
</form>
</Box>
    )
}
export default Admin
