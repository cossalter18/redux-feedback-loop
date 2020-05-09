import React, { Component } from 'react';
import axios from 'axios'
// import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ReviewFeedback extends Component {

    // postFeedback = (event) => {
    //     console.log('in postFeedback click');
        
    //     const feedback = this.props.reduxStore.feedbackReview
    //     console.log(feedback)
    //     event.preventDefault();
    //     axios.post('/feedback', feedback)
    //         .then((response) => {
    //             console.log(response);
    //             const action = { type: 'clear' };
    //             this.props.dispatch(action)
    //             this.props.history.push('/Submit')
    //         }).catch((error) => {
    //             console.log(error);

    //         })
    // }

    handleSubmit = () => {
        console.log("in handleSubmit REVIEWFEEDBACK");
        this.props.dispatch({type: "sendFeedback"});

    }


    render() {
        // const feedback = this.props.reduxStore.myReducer
        return (
            <div>
                <h2>Let's review your feedback!</h2>
                <p><b>Understanding:</b></p>
                <p><b>Feeling:</b></p>
                <p><b>Support:</b></p>
                <p><b>Comments:</b></p>
                <h3>{JSON.stringify(this.props.reduxState)}</h3>

                <button onClick={this.handleSubmit}>Finish</button>



            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ reduxStore })
export default withRouter(connect(mapReduxStoreToProps)(ReviewFeedback));