import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const circleDiameter = 30;

export default StyleSheet.create({
  list: {
    padding: 10,
    marginBottom: 5,
    flexDirection: "row",
    backgroundColor: colors.skyBlue
  },
  circle: {
    width: circleDiameter,
    height: circleDiameter,
    borderRadius: circleDiameter / 2,
    backgroundColor: colors.grey
  },
  image: {
    height: circleDiameter,
    width: circleDiameter,
    borderRadius: circleDiameter / 2
  },
  author: {
    fontWeight: "bold"
  }
});
