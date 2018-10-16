import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import { connect } from "react-redux";
import { actionCreators } from "../../redux/item/actions";
import Title from "./components/Title";
import Input from "./components/Input";
import styles from "./styles";
import TodoList from "./components/TodoList";
import Button from "./components/Button";

function AppContainer({ addItem, navigation }) {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.divider} />
      <Input placeholder={"Enter an item!"} onSubmit={addItem} />
      <View style={styles.divider} />
      <TodoList />
      <Button
        onPress={() => navigation.navigate("NextScreen")}
        title="NextScreen"
        color="white"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

AppContainer.propTypes = {
  addItem: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addItem: ({ toDo }) => dispatch(actionCreators.addItem(toDo))
});

export default connect(
  null,
  mapDispatchToProps
)(AppContainer);
