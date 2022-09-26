import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from "../Components/Home"
import User from '../Components/User'
import Admin from '../Components/Admin'
import Hotels from '../Components/Hotels'
const Allroutes = () => {
  return (
    <div>
  <Routes>
 <Route path="/" element={<Home/>}></Route>
<Route path="/User" element={<User />}></Route>
<Route path="/Admin" element={<Admin/>}></Route>
<Route path="/Hotels" element={<Hotels/>}></Route>
</Routes>
    </div>
  )
}

export default Allroutes