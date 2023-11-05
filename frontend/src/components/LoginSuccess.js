import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export class Loginsuccess extends Component {
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
      <div style={{textAlign:"center"}}>
      <br></br><br></br><br></br><br></br><br></br>
        <h1>Logged in Successfully</h1>
        Redirecting to home page......
      </div>
    )
  }
  return <Navigate to="/navbar"/>
}
}

export default Loginsuccess