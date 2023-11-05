import React, { useState } from 'react'
import {AppBar, Toolbar, Typography,Tabs,Tab} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import {NavLink} from 'react-router-dom';


const Header = ({size, setShow}) => {
    const [value,setValue]=useState();
    

  return (
    <div>
      <AppBar sx={{backgroundColor:'#FF6969'}} position='sticky'>
        <Toolbar>
          <NavLink to="/" style={{color: "black"}}>
            <Typography><LibraryBooksIcon/></Typography>                                 
            </NavLink>
            <nav className='nav1'>
              
              <NavLink  to="/login">Login</NavLink>
              <NavLink  to="/add">Add Products</NavLink>
              <NavLink  to="/books">Books</NavLink>
              
              <NavLink to="/navbar">Shopping</NavLink>
       
          
            </nav>                                                                          {/*   container to keep single tabs of url links is rendered */} 
                                                  
        </Toolbar>  
      </AppBar>
    </div>
  );
};

export default Header;










