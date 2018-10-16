import { StyleSheet } from "react-native";
import colors from "../../../../../../constants/colors";

export default StyleSheet.create({
  box: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: colors.black
  },
  inner: {
    flex: 1,
    margin: 2,
    backgroundColor: colors.black
  }
});
