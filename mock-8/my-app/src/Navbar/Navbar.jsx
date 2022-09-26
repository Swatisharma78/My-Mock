import React from 'react'
import { Link } from 'react-router-dom'
import styles from  "./navbar.module.css"
import {Box} from '@chakra-ui/react';

const Navbar = () => {
  return (
<Box className={styles.navdata}>
<Link to="/" className={styles.nav}>Home</Link>
<Link to="/User" className={styles.nav}>User</Link>
<Link to="/Admin" className={styles.nav}>Admin</Link>
<Link to="/Hotels" className={styles.nav}>Hotels</Link>
    
    </Box>
  )
}

export default Navbar