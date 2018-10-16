import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default class DeatailsBooks extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "NO-title")
    };
  };
  render() {
    const author = this.props.navigation.getParam("author", "NO-author");
    const title = this.props.navigation.getParam("title", "NO-title");
    const genre = this.props.navigation.getParam("genre", "NO-genre");

    return (
      <View style={styles.container}>
        <Text>{author}</Text>
        <Text>{title}</Text>
        <Text>{genre}</Text>
      </View>
    );
  }
}
