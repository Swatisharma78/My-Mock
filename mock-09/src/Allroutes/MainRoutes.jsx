import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Login from '../Components/Login'
import Restaurent from '../Components/Restaurent'
const MainRoutes = () => {
  return (
    <div>
  <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/User" element={<Restaurent />}></Route>
   </Routes>
    </div>
  )
}
export default MainRoutes