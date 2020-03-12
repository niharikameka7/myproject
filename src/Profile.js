import React from 'react';
import d from './data.json';
import icon from './down.svg';
import {BrowserRouter,Route,Link} from 'react-router-dom'; 
import R from './Resume.js';
let Profile=()=>{
   const profiles=d.profiles;
    return(
        <div className="parent">
            <BrowserRouter>
            <Route exact path='/R' component={R} />
            </BrowserRouter>
            {
            profiles.map((i,j)=>(
                <div className="child" key={j}>
                    <img src={icon} alt="profile"></img>
                    <h2>{i.basics.name}</h2>
                    <hr></hr>
                    <a href={"mailto:"+ i.basics.email}className="link">{i.basics.email}</a>
                    <br></br>
                    <a href={"tel:"+ i.basics.mobile }className="link">{i.basics.mobile}</a>
                    <hr></hr>
                    <Link to={{pathname:'/R',index:{value:{j}}}} className="btn">view profile</Link>
                   
                  </div>
            )
            )
            }
        
        </div>
          
        )
}
export default Profile;