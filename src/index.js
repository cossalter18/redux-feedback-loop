import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'


//inputs for redux
import { createStore, combineReducers } from 'redux'
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
    } else if (action.type === 'clear') {
        const feedbackObj = {
            feelings: action.payload.feelings,
            understanding: action.payload.understanding,
            support: action.payload.understanding,
            comment: action.payload.comment
        }
        state = {
            ...state,
            feedback: feedbackObj
        }
    }
    else if (action.type ==="sendFeedback"){
        console.log('sendFeedback');
        
    }
    return state;
}


//store with reducer for app
const myStore = createStore(
    combineReducers({
        newFeedback
    }),
)
ReactDOM.render(
    <Provider store={myStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
