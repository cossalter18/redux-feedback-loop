import React, { Component } from 'react';
import { connect } from 'react-redux'


class Comments extends Component {

    constructor() {
        super();
        this.state = {
            comment: ''
        }
    }

    handleChange = event => {
        console.log("handleChange", event.target.value);

        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit COMMENTS');
        const comment = this.state.comment
        this.props.dispatch({
            type: 'newComment',
            payload: comment
        })
        this.props.history.push('/ReviewFeedback')
    }
    render() {
        return (
            <div>
                <h2>Any additional comments or concerns to add?</h2>
                <main id="input">
                    <input type="text" placeholder="Comments or Concerns"></input>
                    <button onClick={this.handleSubmit}>Next</button>

                </main>
            </div>
        )
    }
}

export default connect()(Comments);