import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Cart from '../Components/Cart'
import Orders from '../Components/Orders'
import Product from '../Components/Product'
import Productdetail from '../Components/Productdetail'
const MainRoutes = () => {
  return (
    <div>
  <Routes>
    <Route path="/" element={<Product/>}></Route>
    <Route path="/Productdetail" element={<Productdetail/>}></Route>
    <Route path="/Cart" element={<Cart/>}></Route>
    <Route path="/Orders" element={<Orders/>}></Route>

   </Routes>
    </div>
  )
}
export default MainRoutes