import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Todo List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "#33CCFF",
    width: 300
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
