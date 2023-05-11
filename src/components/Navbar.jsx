import { AppBar, Box, IconButton,Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Basket from '../pages/Basket';
// import { useBasketContext } from '../context/basket';

const Navbar = () => {
  // const{basket} = useBasketContext();
  return (
    
<Box sx={{ flexGrow: 1 }}>
<AppBar position="static">
  <Toolbar>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon/>
    </IconButton>
    
    <ul style={{display:'flex', flexDirection:'row', listStyle:'none', gap:'20px',  }}>
      <li><a href="" style={{color:'white', textDecoration:'none'}}><Link style={{color:'white', textDecoration:'none'}} to=''>Home</Link></a></li>
      <li><a href="" style={{color:'white', textDecoration:'none'}}><Link style={{color:'white', textDecoration:'none'}} to='/basket'>Basket</Link></a></li>
    </ul>
  
  </Toolbar>
</AppBar>
</Box>
  )
}

export default Navbar