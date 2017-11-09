import { createStore, combineReducers, applyMiddleware } from 'redux';
import levelReducer from '../reducers/levels';

//import renderedDrugsReducer2 from '../reducers/levels';

import thunk from 'redux-thunk'


export default () => {
    const store = createStore(
        combineReducers({
          //  renderedDrugs2: renderedDrugsReducer2,
            level: levelReducer
        }),
        applyMiddleware(thunk)
    )
    return store;
}

