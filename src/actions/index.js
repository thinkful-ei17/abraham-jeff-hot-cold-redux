

/*
What does the game do

1. Display a message for the user to make a guess
  - feedback w/ initial state

  2. Allow the user to make a guess
  - makeGuess

3. Display feedback to the user on correct/incorrect
  - updateFeedback

4. After the user makes the correct guess... the user can start again (new game)
  - 

*/ 

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
});

export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
export const updateFeedback = message => ({
  type: UPDATE_FEEDBACK,
  message
});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
  type: RESET_GAME,
});

/*


On Update Feedback



On Create

On Delete



*/