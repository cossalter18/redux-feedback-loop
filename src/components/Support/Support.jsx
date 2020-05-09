import React, { Component } from 'react';
import { connect } from 'react-redux'

class Support extends Component {


    constructor() {
        super();
        this.state = {
            support: 0
        }
    }

    handleChange = event => {
        console.log("handleChange", event.target.value);

        this.setState({
           support: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit SUPPORT');
        const support = this.state.support
        this.props.dispatch({
            type: 'newSupport',
            payload: support
        })
        this.props.history.push('/Comments')
    }


    render() {
        return (
            <div>
                <h2>How well do you feel supported?</h2>
                <main id="input">
                    <input onChange={this.handleChange} type="number" placeholder="1-10"></input>
                    <button onClick={this.handleSubmit}>Next</button>

                </main>
            </div>
        )
    }
}

export default connect()(Support);