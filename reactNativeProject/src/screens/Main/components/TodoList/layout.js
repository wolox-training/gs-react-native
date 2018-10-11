import React from "react";
import { FlatList } from "react-native";
import { reduxForm } from "redux-form";
import PropTypes from "prop-types";
import FORM_NAME from "./fields";
import Todo from "./components/Todo";

function TodoList({ items, onToggleItemCompleted, onRemoveItem }) {
  return (
    <FlatList
      data={items}
      renderItem={({ item, index }) => (
        <Todo
          item={item}
          onToggleItemCompleted={() => onToggleItemCompleted(index)}
          onRemoveItem={() => onRemoveItem(index)}
        />
      )}
    />
  );
}

TodoList.propTypes = {
  data: PropTypes.array,
  renderItem: PropTypes.func,
  item: PropTypes.array,
  onRemoveItem: PropTypes.func.isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired
};

export default reduxForm({
  form: FORM_NAME
})(TodoList);
