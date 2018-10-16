export const types = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  TOGGLE_ITEM_COMPLETED: "TOGGLE_ITEM_COMPLETED"
};

export const actionCreators = {
  addItem: item => ({ type: types.ADD_ITEM, payload: item }),
  onRemoveItem: index => ({ type: types.REMOVE_ITEM, payload: index }),
  onToggleItemCompleted: index => ({
    type: types.TOGGLE_ITEM_COMPLETED,
    payload: index
  })
};
