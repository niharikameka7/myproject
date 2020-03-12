import React from 'react';
import icon from './down.svg'
import D from './data.json';
let Resume=(props)=>{
    let info =Object.values(props.location.index.value); 
    let person=D.profiles[info];
    return(
        <div className="parent">
            <div className="child">
                <img src={icon} alt="profile"></img>
                <h1>Educational Qualifications</h1>
                <h3>{person.basics.name}</h3>
                <h3>{person.basics.email}</h3>
                <h3>{person.basics.mobile}</h3>
            </div>
            <div className="child2">
            { 
                    person.education.map((i,j)=>(
                        <div key={j}>
                            <h4>{i.degree}</h4>
                            <ul>
                                <li>{i.percentage}{"%"}</li>
                                <li>{i.institute}</li>
                            </ul>
                        </div>
                  ))
                }
                <hr></hr>
                <h3>Skills</h3>
                <hr></hr>
                {person.skills.map((x,y)=>(
                   <div>
                   <h4>{x.type}</h4>
                   {
                   x.values.map((k,l)=>(
                      <div key={l} style={
                          {display:"inline"}
                        }>
                            <span className="skill">{k}</span>
                            </div>
                    
                   ))}               
                   </div>
                ))}
            </div>
        </div>           
        )            
}



export default Resume;
