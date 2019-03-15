import React,{ Component } from 'react'
import{
BrowserRouter as Router,
Link,
Redirect,
withRouter,
NavLink,
Switch,
Route
} from 'react-router-dom'
import Login from './components/login/login'
import Home from './components/home/home'

// const Login=()=>{
//     return<div>Login</div>

// }
// const Home=()=>{
//     return<div>Home</div>
    
// }
class RouterCom extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
      return (
          <Router>
         <Switch>
             <Route exact path="/login" component={Login} />
             <Route exact path="/" component={Home} />
             <Redirect to="/login" />
         </Switch> 
     
      </Router>
      )
      
    }

}

export default RouterCom



// import React, { Component } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   Redirect,
//   withRouter,
//   NavLink
// } from 'react-router-dom'
// const Login=()=>{
//     return<div>Login</div>

// }
// const Home=()=>{
//     return<div>Home</div>
    
// }

// class RouterCom extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/" component={Home} />
       
//         </Switch>
//       </Router>
//     )
//   }
// }

// export default RouterCom
