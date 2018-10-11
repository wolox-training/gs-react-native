import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import { connect } from "react-redux";
import { actionCreators } from "../../redux/item/actions";
import Title from "./components/Title";
import Input from "./components/Input";
import styles from "./styles";
import TodoList from "./components/TodoList";

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
      </View>
    );
  }
}

AppContainer.propTypes = {
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
