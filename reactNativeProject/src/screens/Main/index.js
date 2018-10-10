import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import { connect } from "react-redux";
import { createBottomTabNavigator } from "react-navigation";
import { actionCreators } from "../../redux/item/actions";
import Title from "./components/Title";
import Input from "./components/Input";
import styles from "./styles";
import TodoList from "./components/TodoList";
import ScreenOne from "../ScreenOne";
import Button from "./components/Button";

const mapStateToProps = store => ({
  items: store.item.items
});

const mapDispatchToProps = dispatch => ({
  addItem: ({ toDo }) => dispatch(actionCreators.addItem(toDo))
});

class AppContainer extends Component {
  render() {
    const { items } = this.props;

    return (
      <View style={styles.container}>
        <Title />
        <Input placeholder={"Enter an item!"} onSubmit={this.props.addItem} />
        <TodoList listitems={items} />
        <Button
          onPress={() => this.props.navigation.navigate("NextScreen")}
          title="Learn More"
          color="white"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

AppContainer.propTypes = {
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired
};

const Tn = createBottomTabNavigator({
  Home: AppContainer,
  NextScreen: ScreenOne
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tn);
