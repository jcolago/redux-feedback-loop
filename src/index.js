//Imports for react and redux
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import logger from "redux-logger";
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Sets state from Feelings to be used on Review component then sends to database or resets state depending on the dispatch
const feelingsReducer = (state = 0, action) => {
    switch (action.type) {
        case "SET_FEELINGS":
            return action.payload;
        case "CLEAR_FEELINGS":
            return 0;
        default:
            return state;
    }
}
//Sets state from Understanding to be used on Review component then sends to database or resets state depending on the dispatch
const understandingReducer = (state = 0, action) => {
    switch (action.type) {
        case "SET_UNDERSTANDING":
            return action.payload;
        case "CLEAR_UNDERSTANDING":
            return 0;
        default:
            return state;
    }
}
//Sets state from Support to be used on Review component then sends to database or resets state depending on the dispatch
const supportReducer = (state = 0, action) => {
    switch (action.type) {
        case "SET_SUPPORT":
            return action.payload;
        case "CLEAR_SUPPORT":
            return 0;
        default:
            return state;
    }
}
//Sets state from Comments to be used on Review component then sends to database or resets state depending on the dispatch
const commentsReducer = (state = "", action) => {
    switch (action.type) {
        case "SET_COMMENTS":
            return action.payload;
        case "CLEAR_COMMENTS":
            return "";
        default:
            return state;
    }
}
//Creates a store for all reducers that can be used in components
const store = createStore(combineReducers({
    feelingsReducer,
    understandingReducer,
    supportReducer,
    commentsReducer
}),
    applyMiddleware(logger)
)
//Renders the DOM
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
