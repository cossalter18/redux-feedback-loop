import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';


//inputs for redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const initialFeedback = {
    feedback: {
        feeling: 0,
        understanding: 0,
        support: 0,
        comment: ''
    }
   
}

const newFeedback = (state = initialFeedback, action) => {
    console.log('in my reducer:', action);
    if (action.type === 'newUnderstanding') {
        return { ...state, understanding: action.payload }
    } else if (action.type === 'newFeeling') {
        return { ...state, feelings: action.payload }
    } else if (action.type === 'newSupport') {
        return { ...state, support: action.payload }
    } else if (action.type === 'newComment') {
        return { ...state, comments: action.payload }
    } else if (action.type === "sendFeedback"){
        console.log('sendFeedback', state);
        const feedbackObj = {
            feeling: state.feedback.feeling,
            understanding: state.feedback.understanding,
            support: state.feedback.support,
            comment: state.feedback.support 
        }
        axios.post('/feedback', feedbackObj).then((response) => {
            console.log('back from POST', response.data);
        }).catch((err) =>{
            console.log(err);
            alert('nope')
        })
    }
    return state;
}


//store with reducer for app
const myStore = createStore(
        newFeedback
)
ReactDOM.render(
    <Provider store={myStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
