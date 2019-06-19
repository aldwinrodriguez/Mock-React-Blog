import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers, createStore} from 'redux';

import heartReducer from './reducers/heartReducer';
import clapReducer from './reducers/clapReducer';

import { Provider } from 'react-redux';

const allReducers = combineReducers({
    hearts: heartReducer,
    claps: clapReducer,
})

const store = createStore(
    allReducers, 
    {
        hearts: 0,
        claps: 0
    }
    );

console.log(store.getState());

function Main() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
