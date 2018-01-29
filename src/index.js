import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css'; 

import Game from './components/game';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
  

/* Todo:
1. Make the action creators
2. Create a reducer to handle the actions
3. Create the store
4. Test it out by dispatching actions from src/index.js
*** Dont touch the components yet ***
*/
