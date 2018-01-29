
import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!!!!',
  auralStatus: '',
  correctAnswer:  Math.round(Math.random() * 100) + 1
};

export const gameReducer = (state=initialState, action) => {
  console.log('Calling gameReducer');

  if (action.type === actions.MAKE_GUESS) {
    console.log('Making a guess!');

    action.guess = parseInt(action.guess, 10);
    if (isNaN(action.guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }

    const difference = Math.abs(action.guess - state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    return {
      guesses: [...state.guesses, action.guess],
      feedback
    };
  }
  
  else if (action.type === actions.RESET_GAME) {
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