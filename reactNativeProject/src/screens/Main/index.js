import React from "react";
import PropTypes from "prop-types";
import { View, Button, TouchableHighlight } from "react-native";

import { connect } from "react-redux";
import { actionCreators } from "../../redux/item/actions";
import Title from "./components/Title";
import Input from "./components/Input";
import styles from "./styles";
import TodoList from "./components/TodoList";

import routes from "../../constants/routes";
import colors from "../../constants/colors";

function AppContainer({ addItem, navigation }) {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.divider} />
      <Input placeholder={"Enter an item!"} onSubmit={addItem} />
      <View style={styles.divider} />
      <TodoList />
      <TouchableHighlight style={styles.button}>
        <Button
          onPress={() => navigation.navigate(routes.screenOne)}
          title={routes.screenOne}
          color={colors.white}
        />
      </TouchableHighlight>
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
