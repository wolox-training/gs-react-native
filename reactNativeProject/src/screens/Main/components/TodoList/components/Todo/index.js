import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Checkbox from "../checkbox";
import styles from "./styles";

export default class Todo extends Component {
  render() {
    const { item, onToggleItemCompleted, onRemoveItem } = this.props;
    const itemStyle = item.completed
      ? [styles.item, styles.completed]
      : styles.item;
    return (
      <View key={item.label} style={itemStyle}>
        <Text> {item.label} </Text>
        <View style={styles.rightSection}>
          <Checkbox
            isChecked={item.completed}
            onToggle={onToggleItemCompleted}
          />
          <TouchableOpacity onPress={onRemoveItem}>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Todo.propTypes = {
  onRemoveItem: PropTypes.func.isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired
};
