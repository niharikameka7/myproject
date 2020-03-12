import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import P from './Profile.js';
import R from './Resume.js';
import {BrowserRouter,Route,Link} from 'react-router-dom'; 

let App=()=>{
return(
  <BrowserRouter>
  <Route exact path='/' component={P}/>
  <Route exact path='/R' component={R} />
  </BrowserRouter>
  
)
}
export default App;