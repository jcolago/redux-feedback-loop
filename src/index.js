import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import logger from "redux-logger"; 
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


const feelingsReducer = (state = 0, action) => {
    switch (action.type) {
        case "SET_FEELINGS":
            return action.payload;
            default:
                return state;    
    }
}

const understandingReducer = (state = 0, action) => {
    switch (action.type) {
        case "SET_UNDERSTANDING":
            return action.payload;
            default:
                return state;    
    }
}

const supportReducer = (state = 0, action) => {
    switch (action.type) {
        case "SET_SUPPORT":
            return action.payload;
            default:
                return state;    
    }
}

const commentsReducer = (state = "", action) => {
    switch (action.type) {
        case "SET_COMMENTS":
            return action.payload;
            default:
                return state;    
    }
}

const store = createStore(combineReducers({
feelingsReducer,
understandingReducer,
supportReducer,
commentsReducer
}),
 applyMiddleware(logger)
)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
