import React from 'react'
import { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'
import './login.css'

const Login=()=>{
    const auth=useAuth()
    const navigate=useNavigate()
    const [user,setUser]=useState('')
    const [password,setPassword]=useState('')
    const [list,setLis]=useState(true)
    const change=(event)=>{
        setUser(event.target.value)
    }
    const change1=(event)=>{
        setPassword(event.target.value)
    }
    const handlelogin=(event)=>{
        auth.userlist.map(x=>{
            if(x.username===user && x.password===password){
                auth.login(user)
                navigate('/loginsuccess')
                setLis(true)
            }
            else{
                setLis(false)
            }
        })
        event.preventDefault()  //display invalid details msg
    }
    return(
        <React.Fragment>
    <div className="container1">
    <form className="login-form" onSubmit={handlelogin}>
      <h2><span className="log">LOGIN</span></h2>
      <label> Username:</label>
      <input type="text" value={user} onChange={change} required/>
      <br></br>
      <label> Password:</label>
      <input type="password" value={password} onChange={change1} required/>
      <br></br>
      <button className="login" type='submit'>Login</button>
      </form>
      <br></br>
        {!list?<b>Invalid Details</b>:''} 
      <h3 className='below'>If you don't have account</h3>
      <button className='sign'><a href='/signup'><b>REGISTER</b></a></button>
     </div>
        </React.Fragment>
    )
}
 

export default Login




       