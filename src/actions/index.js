
export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
});

export const RESET_GUESS = 'RESET_GUESS'
export const resetGuess = () => ({
  type: RESET_GUESS,
});

export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK'
export const updateFeedback = message => ({
  type: UPDATE_FEEDBACK,
  message
});

export const RESET_GAME = 'RESET_GAME'
export const resetGame = () => ({
  type: RESET_GAME,
});


//  guesses: [],
//  feedback: 'Make your guess!',
//  auralStatus: '',
//  correctAnswer: Math.round(Math.random() * 100) + 1