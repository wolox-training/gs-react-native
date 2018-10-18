import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";
import variables from "../../../../constants/variables";

export default StyleSheet.create({
  list: {
    padding: 10,
    marginBottom: 5,
    flexDirection: "row",
    backgroundColor: colors.skyBlue
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: variables.circleGreyRadio / 2,
    backgroundColor: colors.grey
  },
  image: {
    height: variables.imageRadio,
    width: variables.imageRadio,
    borderRadius: variables.imageRadio / 2
  },
  author: {
    fontWeight: "bold"
  }
});
