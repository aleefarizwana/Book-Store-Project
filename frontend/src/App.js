import React ,{useState}from 'react';
import Header from './components/Header';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/signup';
import Login from './components/Login';
import LoginSuccess from './components/LoginSuccess';
import SignSuccess from './components/SignSuccess';
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
//import './App.css';
import BookDetail from './components/Book/BookDetail';
import { AuthProvider } from './components/auth';
import RequiredAuth from './components/RequiredAuth';

import Cards from './components/Cards';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import App1 from './App1'
import Displaybook from './components/Book/Displaybook';

function App() {

return (
   <React.Fragment>
    <header>
      <Header />
    </header>

		
    <main>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<RequiredAuth><Home /></RequiredAuth>} exact/>   

        <Route path="/signup" element={<Signup />} exact/>  
        <Route path="/login" element={<Login />} exact/>   
        <Route path="/loginsuccess" element={<LoginSuccess />} exact/>    
        <Route path="/signsuccess" element={<SignSuccess />} exact/>    

        <Route path="/add" element={<RequiredAuth><AddBook /></RequiredAuth>} exact/>   
        <Route path="/books" element={<Books />} exact/> 
          
        <Route path="/books/:id" element={<BookDetail/>}exact/> 

		<Route path="/navbar" element={<RequiredAuth><Navbar/></RequiredAuth>}exact/> 
        <Route path="/cards" element={<Cards/>}exact/> 
        <Route path="/cart" element={<Cart/>}exact/> 
		<Route path="/app1" element={<App1/>}exact/> 
    <Route path="/displaybook" element={<Displaybook/>}exact/> 



      </Routes>
      </AuthProvider>
    </main>

   
   </React.Fragment>
  );
}

export default App;


