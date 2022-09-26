import React,{useState,useEffect} from 'react'
import {SimpleGrid,Button} from '@chakra-ui/react'
import {getResturant} from '../Redux/AppReducer/action'
import {useDispatch,useSelector} from 'react-redux'
import Card from './Card'
const Resturant=()=>{
    const dispatch= useDispatch()
    const[rest,setRest]=useState(1)
  const {resturant}=useSelector((store)=>store.AppReducer)
    useEffect(() => {
        dispatch (getResturant(rest))
    }, [rest])
  console.log(resturant)
  return (
  <>
    <div id="filter">
            <h5>Filter By Type</h5>
            <select name="role" id="Allproduct" onchange="Allproduct()">
                <option value="default">select</option>
                <option value="fast_food">fast_food</option>
                <option value="fine_dining">fine_dining</option>
                <option value="ethnic">ethnic</option>
            </select>
        </div>
  <SimpleGrid columns={[1,2,3,4,5]} spacing={1}>
  { resturant.data?.map((resturant)=>{return <Card resturant={resturant}/>})}</SimpleGrid>
  <Button onClick={()=>setRest(page=>page-1)} backgroundColor={"navy"} color={"white"}  _hover="red"  variant='outline'>Pre</Button>
  <Button onClick={()=>setRest(page=>page+1)} backgroundColor={"navy"} color={"white"}  _hover="red"  variant='outline'>Next</Button>
  </>
  )
}
export default Resturant