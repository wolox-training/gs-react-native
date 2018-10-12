import React, { Component } from "react";
import { FlatList } from "react-native";

import PropTypes from "prop-types";

import Todo from "./components/Todo";

// const mapDispatchToProps = dispatch => ({
//   onRemoveItem: index => {
//     dispatch(actionCreators.onRemoveItem(index));
//   },

//   onToggleItemCompleted: index =>
//     dispatch(actionCreators.onToggleItemCompleted(index))
// });

// const mapStateToProps = store => ({
//   items: store.item.items
// });

class TodoList extends Component {
  render() {
    const { items, onRemoveItem, onToggleItemCompleted } = this.props;
    return (
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <Todo
            key={index}
            item={item}
            onToggleItemCompleted={() => onToggleItemCompleted(index)}
            onRemoveItem={() => onRemoveItem(index)}
          />
        )}
      />
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, completed: PropTypes.bool })
  ).isRequired,

  onRemoveItem: PropTypes.func.isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired
};

export default TodoList;
