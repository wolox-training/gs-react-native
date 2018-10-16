import { types } from "./actions";
const initialState = {
  items: []
};

function reducer(state = initialState, action) {
  const { items } = state;

  switch (action.type) {
    case types.ADD_ITEM: {
      return {
        ...state,
        items: [{ label: action.payload, completed: false }, ...items]
      };
    }
    case types.TOGGLE_ITEM_COMPLETED: {
      const newItems = items.slice();
      const oldItem = items[action.payload];
      newItems[action.payload] = { ...oldItem, completed: !oldItem.completed };
      return {
        ...state,
        items: newItems
      };
    }
    case types.REMOVE_ITEM: {
      const i = action.payload;
      const newItems = [
        ...items.slice(0, i),
        ...items.slice(i + 1, items.length)
      ];
      return {
        ...state,
        items: newItems
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
