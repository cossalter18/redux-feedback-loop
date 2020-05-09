import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

//inputs for redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const firstReducerInitialState = [];

const myReducer = (state = firstReducerInitialState, action) => {
    console.log('in my reducer:', action );
    if (action.type === 'newFeedback') {
        return state = [...state, action.payload]
    }
    return state;
}

//store with reducer for app
const myStore = createStore(myReducer)

ReactDOM.render(
    <Provider store={myStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
