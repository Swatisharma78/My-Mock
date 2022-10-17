import React from 'react'
import { Link } from 'react-router-dom'
import styles from  "./navbar.module.css"
import {Box} from '@chakra-ui/react';
const Navbar = () => {
  return (
    <Box className={styles.nav}>
<Link to="/" className={styles.navLink}>Product</Link>
<Link to="/Productdetail" className={styles.navLink}>Product Detail</Link>
<Link to="/Cart" className={styles.navLink}>Cart</Link>
<Link to="/Orders" className={styles.navLink}>Orders</Link>
</Box>
  )
}
export default Navbar