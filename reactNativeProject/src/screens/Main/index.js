import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import { connect } from "react-redux";
import { actionCreators } from "../../redux/item/actions";
import Title from "./components/Title";
import Input from "./components/Input";
import styles from "./styles";
import TodoList from "./components/TodoList";

const mapDispatchToProps = dispatch => ({
  addItem: ({ toDo }) => dispatch(actionCreators.addItem(toDo))
});

class AppContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title />
        <View style={styles.divider} />
        <Input placeholder={"Enter an item!"} onSubmit={this.props.addItem} />
        <View style={styles.divider} />
        <TodoList />
      </View>
    );
  }
}

AppContainer.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(AppContainer);
