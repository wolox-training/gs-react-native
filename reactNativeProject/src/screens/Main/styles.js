import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  divider: {
    paddingBottom: 10,
    height: 2,
    backgroundColor: colors.whiteSmoke
  },
  button: {
    backgroundColor: colors.red,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.red
  }
});
