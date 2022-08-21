import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

//SUCH REDUCERS. MUCH REDUCTION. WOW!

//SET_SURVEYS REDUCER
const survey = (state = [], action) => {
    switch (action.type){
        case 'SET_SURVEYS':
            console.log(`today Im feeling: ${action.payload}`);
            return [...state, action.payload];
        default:
            return state;    
    }
};

// ADD_COMMENTS REDUCER
const comments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENTS':
            return action.payload;
        case 'CLEAR':
            return [];
        default:
            return state;
    }

};



const store = createStore(
    combineReducers({
        //LIST REDUCERS HERE
        survey,
        comments,
        // feeling,
        // support,

     
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();