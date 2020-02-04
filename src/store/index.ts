import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'; // add-on you may want
import logger from 'redux-logger'; // add-on you may want

declare var firebaseRef;

import { combineReducers } from 'redux';

// Import feature reducers and state interfaces.
import { user, userInitialState } from './user/reducers';

// Combine feature reducers into a single root reducer
const rootReducer = combineReducers({
  user,
});

export const getInitalState = () => ({
    user: userInitialState
});

export const configureStore = (preloadedState: any) => createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));