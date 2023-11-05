import React from 'react';
import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                <NavLink sx={{color:'green'}}to='/app1'>My Shopping</NavLink>
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                
                <Typography>< ShoppingCartIcon /></Typography> 
                
                <span>{size}</span>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar


// import React from 'react'
// import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
// import { useAuth} from './auth'


// import auth from './auth';
// const Navbar = () => {
//     const auth=useAuth()
//   return (
//     <div>
//         <nav>
//         <NavLink to="/login">Login</NavLink>
//         </nav>
       

//       {/* <nav className='nav1'>
//       <h1 class="head1">&copy;<span class="logo1">CODE</span>TecH</h1>
//       <NavLink to="/header">Home</NavLink>
//       <NavLink to="/about">About</NavLink>
//       {/*<NavLink to="/product">Product</NavLink>*/}
//       {/* <NavLink to="/profile">Profile</NavLink>
//       {!auth.user && <NavLink to="/login">Login</NavLink>}
//       </nav> */}

//     </div> 
    
//   )
// }

// export default Navbar


