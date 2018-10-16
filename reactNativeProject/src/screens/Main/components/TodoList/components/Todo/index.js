import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Checkbox from "../checkbox";
import styles from "./styles";

function Todo({ item, onToggleItemCompleted, onRemoveItem }) {
  const itemStyle = item.completed
    ? [styles.item, styles.completed]
    : styles.item;
  return (
    <View style={itemStyle}>
      <Text>{item.label}</Text>
      <View style={styles.rightSection}>
        <Checkbox isChecked={item.completed} onToggle={onToggleItemCompleted} />
        <TouchableOpacity onPress={onRemoveItem}>
          <Text style={styles.remove}> &times;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Todo.propTypes = {
  onRemoveItem: PropTypes.func.isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired
};

export default Todo;
