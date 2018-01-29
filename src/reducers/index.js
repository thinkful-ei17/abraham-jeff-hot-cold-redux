
import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer:  Math.round(Math.random() * 100) + 1
};


export const gameReducer = (state=initialState, action) => {

  if (action.type === actions.MAKE_GUESS) {
    return {
      guesses: [...state.guesses, action.guess]
    }
  }
  
  else if (action.type === actions.RESET_GAME) {
    return initialState;
  }

  return state;
};

//  guesses: [],
//  feedback: 'Make your guess!',
//  auralStatus: '',
//  correctAnswer: Math.round(Math.random() * 100) + 1