import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default class DeatailsBooks extends Component {
  render() {
    // console.warn("hola1");
    const id = this.props.navigation.getParam("itemId", "NO-ID");

    return (
      <View style={styles.circle}>
        <Text>{id}</Text>
      </View>
    );
  }
}
