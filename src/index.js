import React from 'react';
import ReactDOM from 'react-dom';

import * as actions from './actions';
import store from './store';

import './reset.css';
import './index.css'; 

import Game from './components/game';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
  

console.log(store.getState());

store.dispatch(actions.makeGuess('10'));

console.log(store.getState());


// console.log(store.getState());

// console.log(store.dispatch(actions.updateFeedback('You made a guess!')));

// console.log(store.getState());

// console.log(store.dispatch(actions.resetGame()));

// console.log(store.getState());

// console.log(store.dispatch(actions.makeGuess('999')));

// console.log(store.getState());

/* Todo:
1. Make the action creators
2. Create a reducer to handle the actions
3. Create the store
4. Test it out by dispatching actions from src/index.js
*** Dont touch the components yet ***
*/
