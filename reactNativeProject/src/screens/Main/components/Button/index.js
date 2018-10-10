import React, { Component } from "react";
import { View, Button } from "react-native";
import styles from "./styles";

export default class ButtonOneScreen extends Component {
  render() {
    const { onPress, title, color, accessibilityLabel } = this.props;
    return (
      <View style={styles.button}>
        <Button
          onPress={onPress}
          title={title}
          color={color}
          accessibilityLabel={accessibilityLabel}
        />
      </View>
    );
  }
}
