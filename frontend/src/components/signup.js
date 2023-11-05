import React, { Component, useState } from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'
import './login.css'

const Signup =()=> {
    const [user,setUser]=useState('')
    const [password,setPassWord]=useState('')
    const auth=useAuth()
    const navigate=useNavigate()
    const handlesignup=(event)=>{
        auth.signup(user,password)
        navigate('/signsuccess')

        event.preventDefault()
    }
   
const change=(event)=>{
    setUser(event.target.value)
}
const change1=(event)=>{
    setPassWord(event.target.value)
}
const store=(event)=>{
    console.log(auth.userList)
   
}
return(
    <div>
        <div class="container">
        <form class="login-form" onSubmit={handlesignup}>
            <h2 className='create'>CREATE A NEW ACCOUNT</h2>
        <label>UserName:</label>
        <input type='text' value={user} onChange={change} required/>
        <br></br>
        <label>Password:</label>
        <input type='password' value={password} onChange={change1} required/> 
        <br></br>
        <div className='signup'>
        <button className='signup1' type='submit'>SIGN-UP</button>
        
        <button className='signup1' onClick={store}>LOGIN</button>  
        </div> 
        {/* This LOG button is used to store all Signup details */}
        </form>
        </div>

    </div>
)
   
}

export default Signup