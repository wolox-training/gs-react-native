import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const variables = {
  imageRadio: 32,
  circleGreyRadio: 100,
  circleWidth: 30,
  circleHeight: 30
};

export default StyleSheet.create({
  list: {
    padding: 10,
    marginBottom: 5,
    flexDirection: "row",
    backgroundColor: colors.skyBlue
  },
  circle: {
    width: variables.circleWidth,
    height: variables.circleHeight,
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
