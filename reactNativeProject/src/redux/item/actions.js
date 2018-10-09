export const types = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  TOGGLE_ITEM_COMPLETED: "TOGGLE_ITEM_COMPLETED"
};

export const actionCreators = {
  addItem: item => ({ type: types.ADD_ITEM, payload: item }),
  removeItem: index => {
    return { type: types.REMOVE_ITEM, payload: index };
  },
  toggleItemCompleted: index => {
    return { type: types.TOGGLE_ITEM_COMPLETED, payload: index };
  }
};
