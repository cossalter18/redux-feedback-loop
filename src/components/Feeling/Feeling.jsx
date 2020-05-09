import React, { Component } from 'react';
import { connect } from 'react-redux'

class Feeling extends Component {


    constructor() {
        super();
        this.state = ''
    }

    handleChange = event => {
        console.log("handleChange", event.target.value);

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        console.log('in handleSubmit');
        this.props.dispatch({
            type: 'newFeedback',
            payload: this.state
        })
        // this.props.history.push('/Support')
    }



    render() {
        return (
            <div>
                <h2>Feeling.jsx</h2>
                <main id="input">
                    <input onChange={this.handleChange} type="number" placeholder="1-10"></input>
                    <button onClick={this.handleSubmit}>Next</button>
                </main>
            </div>
        )
    }
}
export default connect()(Feeling);