import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  container: {
    padding: 20,

    backgroundColor: colors.blue,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.blue,
    fontSize: 15,
    color: colors.white
  },

  list: {
    padding: 10,
    marginBottom: 5,
    flexDirection: "row",
    backgroundColor: colors.skyBlue
  }
});
