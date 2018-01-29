import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {gameReducer, feedbackReducer} from './reducers';
import * as actions from './actions';

const reducers = combineReducers({gameReducer, feedbackReducer});

export default createStore(reducers, composeWithDevTools(
  // applyMiddleware(...middleware),
  // other store enhancers if any
));

