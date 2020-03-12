import React from 'react';
class Data extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    countIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    countDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    render(){
        return(
            <center><div>
                <h2>{this.state.count}</h2>
                <button onClick={this.countIncrement}>Click me to increase</button>
                <button onClick={this.countDecrement}>Click me to decrease</button>
                </div>
                </center>
        )
    }
}

export default Data;