export const actions = {
  CLICK_SQUARE: 'CLICK_SQUARE',
  MAKE_MOVE: 'MAKE_MOVE'
};

export const actionsCreators = {
  clickSquare: values => ({
    type: actions.CLICK_SQUARE,
    payload: { history: values.history, stepNumber: values.stepNumber, xIsNext: values.xIsNext }
  }),
  makeMove: values => ({
    type: actions.MAKE_MOVE,
    payload: { stepNumber: values.stepNumber, xIsNext: values.xIsNext }
  })
};
