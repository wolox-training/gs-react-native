import React, { Component } from "react";
import { connect } from "react-redux";
import TodoList from "./layout";
import PropTypes from "prop-types";

import { actionCreators } from "../../../../redux/item/actions";

const mapDispatchToProps = dispatch => ({
  removeItem: index => {
    dispatch(actionCreators.removeItem(index));
  },

  toggleItemCompleted: index =>
    dispatch(actionCreators.toggleItemCompleted(index))
});

const mapStateToProps = store => ({
  items: store.item.items
});
class TodoListContainer extends Component {
  render() {
    const items = this.props.listitems;
    return (
      <TodoList
        items={items}
        onToggleItemCompleted={this.props.toggleItemCompleted}
        onRemoveItem={this.props.removeItem}
      />
    );
  }
}
TodoList.propTypes = {
  items: PropTypes.array,
  onRemoveItem: PropTypes.func.isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
