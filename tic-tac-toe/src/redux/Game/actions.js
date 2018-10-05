export const actions = {
  CLICK_SQUARE: 'CLICK_SQUARE',
  MAKE_MOVE: 'MAKE_MOVE'
};

export const actionsCreators = {
  clickSquare: i => ({
    type: actions.CLICK_SQUARE,
    payload: { i }
  }),
  makeMove: step => ({
    type: actions.MAKE_MOVE,
    payload: { step }
  })
};
