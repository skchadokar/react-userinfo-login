index.js--------

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

------------------------
app.js

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfo from './userinfo';
import Login from './login';
import createHistory from "history/createBrowserHistory";
import { Switch, Route } from 'react-router-dom';

const history = createHistory()

const Main = () => (

      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/userinfo' component={UserInfo}></Route>
        <Route exact path='/login' component={Login}></Route>
      </Switch>
    );


class App extends Component {

  constructor(props){
    super(props);
    }

  render() {
    return (
      <div className='app'>
           <Main />
      </div>
    );
  }
}

export default App;

--------------------------------

login.js

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import createHistory from "history/createBrowserHistory";
const history = createHistory()
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
 
 handleClick(event){
  var apiBaseUrl = "http://localhost:4000/api/";
  var self = this;
  if(this.state.username==='' || this.state.password===''){
    alert("Please check userid/password");
    return false;
  }
  var payload={
        "email":this.state.username,
        "password":this.state.password
  }
 /* axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
                              console.log(response);
                              if(response.data.code == 200){
                              console.log("Login successfull");
                              }
  else if(response.data.code == 204){
                              console.log("Username password do not match");
                              alert("username password do not match")
                              }
  else{
                              console.log("Username does not exists");
                              alert("Username does not exist");
                              }
  })
  .catch(function (error) {
  console.log(error);
  });*/
  alert(payload);
  history.push("/userinfo");
  history.go();
  }
render() {
    return (
      <div><center>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
         </center> 
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;
------------------------------------

route.js

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Login from '../components/Login';
export default (
  <Route path="/" component={App}>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/userinfo' component={UserInfo}></Route>
        <Route exact path='/login' component={Login}></Route>
  </Route>
);
-----------------------------------

CheckBox.js
import React from 'react'

export const CheckBox = props => {
    return (
      <li>
       <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
      </li>
    )
}

export default CheckBox

------------------------------------
UserInfo.js

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import createHistory from "history/createBrowserHistory";
import  CheckBox  from './CheckBox';
import {ic_search} from 'react-icons-kit/md/ic_search';
import { Icon } from 'react-icons-kit'
const history = createHistory()


class UserInfo extends Component {
constructor(props){
  super(props);
  this.state={
 
  hobies: [
    {id: 1, value: "singing", isChecked: false},
    {id: 2, value: "writing", isChecked: false},
    {id: 3, value: "cooking", isChecked: false},
    {id: 4, value: "dancing", isChecked: false}
  ],

  user :{id : '0', name : ''},
  }
 }
 handleClick(event,type){
  var apiBaseUrl = "http://localhost:4000/api/";
  var self = this;
  var payload={
        "email":this.state.username,
        "password":this.state.password
  }
 /* axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
                              console.log(response);
                              if(response.data.code == 200){
                              console.log("Login successfull");
                              }
  else if(response.data.code == 204){
                              console.log("Username password do not match");
                              alert("username password do not match")
                              }
  else{
                              console.log("Username does not exists");
                              alert("Username does not exist");
                              }
  })
  .catch(function (error) {
  console.log(error);
  });*/
  alert(payload);
  history.push("/userinfo");
  history.go();
  }

  handleClickSearch(event){
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    let userId= this.state.username;
   /* axios.get(apiBaseUrl+'login', userId)
      .then(function (response) {
                                console.log(response);
                                if(response.data.code == 200){
                                console.log("Login successfull");
                                }
    else if(response.data.code == 204){
                                console.log("Username password do not match");
                                alert("username password do not match")
                                }
    else{
                                console.log("Username does not exists");
                                alert("Username does not exist");
                                }
    })
    .catch(function (error) {
    console.log(error);
    });*/
   
    }

  handleCheckChieldElement = (event) => {
    let hb = this.state.hobies
    hb.forEach(hb => {
       if (hb.value === event.target.value)
          hb.isChecked =  event.target.checked
    })
    this.setState({hobies: hb})
  }
render() {
    return (
      <div><center>
        <MuiThemeProvider>
          <div>
           
          <AppBar
             title="User Information"
           /> 
         
          <table>
            <tr>
         Emp ID :  <TextField
             hintText="Enter your id"
             floatingLabelText="id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             /> 
            <Icon  icon={ic_search} size={20} onClick= {(event) => this.handleClickSearch().bind}/>
           <br/>
           </tr>
          Name :   <TextField
               type="password"
               hintText="Enter your Name"
               floatingLabelText="Name"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>

           Address :  <TextField
             hintText="Enter your Address"
             floatingLabelText="Address"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             /><br/>

            City :  <TextField
             hintText="Enter your City"
             floatingLabelText="City"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             /> 
           ZipCode :  <TextField
             hintText="Enter your ZipCode"
             floatingLabelText="ZipCode"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/> <br/>
          Hobby :    <ul>
                        {
                        this.state.hobies.map((hobies) => {
                          return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement.bind}{...hobies} />)
                        })
                      }
                      </ul>
             <br/>

       </table> 
             <RaisedButton label="Save" primary={true} style={style} onClick={(event) => this.handleClick(event,'save').bind}/>
             <RaisedButton label="Delete" primary={true} style={style} onClick={(event) => this.handleClick(event,'delete').bind}/>
         </div>
         </MuiThemeProvider>
         </center> 
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default UserInfo;
--------------------------------
app.css

.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@media all and (min-width: 480px) {
  .Login {
    padding: 60px 0;
  }

  .Login form {
    margin: 0 auto;
    max-width: 320px;
  }
}

ul {
  list-style: none;
}
