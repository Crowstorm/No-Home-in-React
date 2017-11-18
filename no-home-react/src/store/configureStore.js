import { createStore, combineReducers, applyMiddleware } from 'redux';
import levelReducer from '../reducers/levels';
import modalReducer from '../reducers/modal'

//import renderedDrugsReducer2 from '../reducers/levels';

import thunk from 'redux-thunk'


export default () => {
    const store = createStore(
        combineReducers({
            level: levelReducer,
            modal: modalReducer
        }),
        applyMiddleware(thunk)
    )
    return store;
}

