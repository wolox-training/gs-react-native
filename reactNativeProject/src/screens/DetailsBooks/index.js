import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import styles from "./styles";

class DeatailsBooks extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };
  render() {
    const author = this.props.navigation.getParam("author");
    const title = this.props.navigation.getParam("title");
    const genre = this.props.navigation.getParam("genre");

    return (
      <View style={styles.container}>
        <Text>{author}</Text>
        <Text>{title}</Text>
        <Text>{genre}</Text>
      </View>
    );
  }
}

DeatailsBooks.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default DeatailsBooks;
