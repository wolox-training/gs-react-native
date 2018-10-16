import { StyleSheet } from "react-native";
import colors from "../../../../../../constants/colors";

export default StyleSheet.create({
  item: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.whiteSmoke
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center"
  },
  remove: {
    marginLeft: 10,
    marginBottom: 2,
    color: colors.indianRed,
    fontSize: 26
  },
  completed: {
    backgroundColor: colors.whiteSmoke
  }
});
