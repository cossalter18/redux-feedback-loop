import React, { Component } from 'react';
import {connect} from 'react-redux'

class Understanding extends Component {

   constructor(){
       super();
       this.state={
           understanding: 0
       }
   }

    handleChange = (event) => {
        console.log("handleChange");
        
        this.setState({
           understanding: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit UNDERSTANDING');
        const understanding = this.state.understanding
        this.props.dispatch({
            type: 'newUnderstanding',
            payload: understanding
        })
        this.props.history.push('/Feeling')
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the material?</h2>
                <main id="input">
                    <input onChange={this.handleChange} type="number" placeholder="1-10"></input>
                    <button onClick={this.handleSubmit}>Next</button>

                </main>
            </div>
        )
    }
}

export default connect()(Understanding);