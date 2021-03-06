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


const initialFeedback = []

// const feedbackReducer = (state = initialFeedback, action) => {
//     console.log('feedbackReducer:', action.payload);
//     if (action.type === 'sendFeedback') {
//         console.log('adding feedback', action.payload);
//         const feedbackObj = {
//             feeling: action.payload.feeling,
//             understanding: action.payload.understanding,
//             support: action.payload.support,
//             comment: action.payload.comment
//         }
//         state = {
//             ...state,
//             feedback: feedbackObj

//         }

//     }

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
        axios.post('/feedback', state).then((response) => {
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
