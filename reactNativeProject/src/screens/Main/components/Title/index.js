import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo List</Text>
    </View>
  );
}

export default Title;
