import React, { Component } from 'react';

// import axios from 'axios';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';


class ReviewFeedback extends Component {

   
    handleSubmit = () => {
        console.log("in handleSubmit REVIEWFEEDBACK");
        this.props.dispatch({ type: "sendFeedback", payload: this.state});
        this.props.history.push('/Submit')

    }


    render() {
    
        return (
            <div>
                <h2>Let's review your feedback!</h2>
                <p><b>Understanding:</b>{this.props.undertanding}</p>
                <p><b>Feeling:</b></p>
                <p><b>Support:</b></p>
                <p><b>Comments:</b></p>
                <h3>{JSON.stringify(this.props.reduxState)}</h3>

                <button onClick={this.handleSubmit}>Finish</button>



            </div>
        )
    }
}


export default connect()(ReviewFeedback)