import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";

function ButtonOneScreen(props) {
  const { onPress, title, color, accessibilityLabel } = props;
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
export default ButtonOneScreen;
