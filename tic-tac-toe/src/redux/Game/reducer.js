import { actions } from './actions.js';

const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.CLICK_SQUARE:
      const stepNumberClickSquare = state.stepNumber + 1;
      const xIsNextClickSquare = !state.xIsNext;
      const current = state.history[state.history.length - 1];
      const squares = current.squares.slice();
      squares[action.payload.i] = state.xIsNext ? 'X' : 'O';
      const history = state.history.concat([
        {
          squares
        }
      ]);

      return {
        ...state,
        history,
        stepNumber: stepNumberClickSquare,
        xIsNext: xIsNextClickSquare
      };

    case actions.MAKE_MOVE:
      const stepNumberMakeMove = action.payload.step;
      const xIsNextMakeMove = action.payload.step % 2 === 0;
      return {
        ...state,
        stepNumber: stepNumberMakeMove,
        xIsNext: xIsNextMakeMove
      };

    default:
      return state;
  }
}
