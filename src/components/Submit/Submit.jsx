import React, { Component } from 'react';

class Submit extends Component {

handleClick=()=>{
console.log("in handleclick submit");
this.props.history.push('/')
}

    render() {
        return (
            <div>
                <h2>Thanks for the Feedback!</h2>
                <button onClick={this.handleClick}>Go home</button>
            </div>
           
        )
    }
}

export default Submit;