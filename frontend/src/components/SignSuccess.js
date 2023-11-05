import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export class SignSuccess extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         islogged:true
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({islogged:false})
        },2000)
    }
  render() {
    if(this.state.islogged){
    return (
      <div>
      <br></br><br></br><br></br><br></br><br></br>
      <center><h1>Account Created Successfully</h1>Redirecting to Login page</center></div>
    )
  }
  return <Navigate to='/login'/>
}
}

export default SignSuccess