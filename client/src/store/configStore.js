import { createStore } from 'redux';
import rootReduce from '../reducers'; //if this doesnt work, maybe its because of the index.js

export default (initialState) => createStore(initialState, rootReducer); 