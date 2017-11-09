import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore'
import {setLevel} from './actions/levels'

const store = configureStore();


//store.dispatch(setLon(30));

setTimeout(() =>{
store.dispatch(setLevel("boze"));
}
, 3000)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
