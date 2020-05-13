import React, { Component } from 'react';
import { connect } from 'react-redux'

class Feeling extends Component {

    constructor() {
        super();
        this.state = {
            feeling: 0
        }
    }

    handleChange = (event) => {
        console.log("handleChange");

        this.setState({
            feeling: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit FEELING');
        const feeling = this.state.feeling
        this.props.dispatch({
            type: 'newFeeling',
            payload: feeling
        })
        this.props.history.push('/Support')
    }

    render() {
        return (
            <div>
                <h2>How are you feeling about the new material?</h2>
                <main id="input">
                    <input onChange={this.handleChange} type="number" placeholder="1-10"></input>
                    <button onClick={this.handleSubmit}>Next</button>
                </main>
            </div>
        )
    }
}

export default connect()(Feeling);