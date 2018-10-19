import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const measureCricle = 30;

export default StyleSheet.create({
  list: {
    padding: 10,
    marginBottom: 5,
    flexDirection: "row",
    backgroundColor: colors.skyBlue
  },
  circle: {
    width: measureCricle,
    height: measureCricle,
    borderRadius: measureCricle / 2,
    backgroundColor: colors.grey
  },
  image: {
    height: measureCricle,
    width: measureCricle,
    borderRadius: measureCricle / 2
  },
  author: {
    fontWeight: "bold"
  }
});
