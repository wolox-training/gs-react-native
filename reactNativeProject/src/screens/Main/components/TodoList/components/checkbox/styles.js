import { StyleSheet } from "react-native";
import colors from "../../../../../../constants/colors";

export default StyleSheet.create({
  box: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: colors.colorBlack
  },
  inner: {
    flex: 1,
    margin: 2,
    backgroundColor: "rgba(0,0,0,0.8)"
  }
});
