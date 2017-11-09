import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore'
import {setLevel} from './actions/levels'

import { Provider } from 'react-redux'


const store = configureStore();


console.log(store.getState())

setTimeout(() =>{
store.dispatch(setLevel("second"));
console.log(store.getState())
}
, 3000)

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
