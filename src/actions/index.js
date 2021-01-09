import actionTypes from './actionTypes';
export const setDeck = deck => ({
    type: actionTypes.SET_DECK,
    deck
});
export const addWin = game => ({
    type: actionTypes.ADD_WIN,
    game
});
export const addLose = game => ({
    type: actionTypes.ADD_LOSE,
    game
});
export const addDraw = game => ({
    type: actionTypes.ADD_DRAW,
    game
});