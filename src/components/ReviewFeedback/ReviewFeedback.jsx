import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';


class ReviewFeedback extends Component {

   



    render() {
        // const feedback = this.props.reduxStore.myReducer
        return (
            <div>
                <h2>Let's review your feedback!</h2>
                <p><b>Understanding:</b></p>
                <p><b>Feeling:</b></p>
                <p><b>Support:</b></p>
                <p><b>Comments:</b></p>
              


            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({reduxStore
})
export default withRouter(connect(mapReduxStoreToProps)(ReviewFeedback));