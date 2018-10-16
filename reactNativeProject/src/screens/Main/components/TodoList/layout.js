import React from "react";
import { FlatList } from "react-native";

import PropTypes from "prop-types";

import Todo from "./components/Todo";

function TodoList(props) {
  const { items, onRemoveItem, onToggleItemCompleted } = props;
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

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, completed: PropTypes.bool })
  ).isRequired,

  onRemoveItem: PropTypes.func.isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired
};

export default TodoList;
