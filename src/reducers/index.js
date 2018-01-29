
import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer:  Math.round(Math.random() * 100) + 1
};


export const gameReducer = (state=initialState, action) => {

  if (action.type === action.MAKE_GUESS) {
    return {
      guesses: [...state.guesses, action.guess]
    };
  }
  
  else if (action.type === action.RESET_GAME) {
    return initialState;
  }

  return state;
};


export const feedbackReducer = (state=initialState, action) =>{
  if(action.type === action.UPDATE_FEEDBACK){
    return {
      ...state,
      feedback: action.message
    };
  }
  return state;
};


//  guesses: [],
//  feedback: 'Make your guess!',
//  auralStatus: '',
//  correctAnswer: Math.round(Math.random() * 100) + 1