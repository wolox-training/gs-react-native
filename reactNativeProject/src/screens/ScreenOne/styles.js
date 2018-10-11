import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    padding: 20,

    backgroundColor: "blue",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "blue",
    fontSize: 15,
    color: "white"
  },

  container: {
    padding: 10,
    marginBottom: 5,
    flexDirection: "row",
    backgroundColor: "skyblue"
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 100 / 2,
    backgroundColor: "grey"
  }
});
