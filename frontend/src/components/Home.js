import React from 'react'
import {Box, Button, Typography} from '@mui/material';
import {Link} from "react-router-dom";
import { useAuth } from './auth';
const Home = () => {
  const auth=useAuth()
  const handlelogout=()=>{
      auth.logout()
    }
  return (
    <div>
       
     <Box display= 'flex' flexDirection='column' alignItems='center' >
     <h1>Welcome User</h1>
      <Button LinkComponent={Link} to="/books"  sx= {{ marginTop:15, backgroundColor:'#f9004d'}}variant='contained'>
      <Typography variant='h3'> View All Products </Typography>
      </Button>
       
      </Box>
      <center>
     
      <br></br><button onClick={handlelogout} sx={{marginTop:15, backgroundColor:' #000036' }}>
       <Typography variant='h4'>  Logout  </Typography>
        </button>
    </center>
    </div>
  )
}

export default Home;
