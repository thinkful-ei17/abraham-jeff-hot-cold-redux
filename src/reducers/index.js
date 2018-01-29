
import * as actions from '../actions';

const initialState = {
  guesses: [],
  // feedback: 'Make your guess!!!!',
  auralStatus: '',
  correctAnswer:  Math.round(Math.random() * 100) + 1
};


export const gameReducer = (state=initialState, action) => {
  console.log('Calling gameReducer');

  if (action.type === actions.MAKE_GUESS) {
    console.log('Making a guess!');
    return {
      guesses: [...state.guesses, action.guess]
      // ...state,
      // guesses: action.guess
    };
  }
  
  else if (action.type === action.RESET_GAME) {
    console.log('Resetting state');
    return initialState;
  }

  return state;
};

const feedbackInitialState ={
  feedback: 'Make your guess!'
};

export const feedbackReducer = (state=feedbackInitialState, action) =>{
  if(action.type === actions.UPDATE_FEEDBACK){
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