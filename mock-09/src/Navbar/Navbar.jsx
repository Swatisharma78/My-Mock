import React from 'react'
import { Link } from 'react-router-dom'
import styles from  "./navbar.module.css"
import {Box} from '@chakra-ui/react';
const Navbar = () => {
  return (
    <Box className={styles.nav}>
  <Link to="/" className={styles.navLink}>Login</Link>
<Link to="/User" className={styles.navLink}>Restaurent</Link>
</Box>
  )
}
export default Navbar