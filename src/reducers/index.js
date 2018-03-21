import { combineReducers } from 'redux';
import test from './testReducer';
import common from './commonReducer';
//Import all reducers here

export default combineReducers({
    //put the reducers here
    test,
    common
})