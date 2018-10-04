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
      return {
        ...state,
        history: action.payload.history,
        stepNumber: action.payload.stepNumber,
        xIsNext: action.payload.xIsNext
      };

    case actions.MAKE_MOVE:
      return {
        ...state,
        stepNumber: action.payload.stepNumber,
        xIsNext: action.payload.xIsNext
      };

    default:
      return state;
  }
}
