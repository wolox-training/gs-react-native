import React, { Component } from "react";
import { FlatList } from "react-native";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import Todo from "./components/Todo";
import { actionCreators } from "../../../../redux/item/actions";

const mapDispatchToProps = dispatch => ({
  onRemoveItem: index => {
    dispatch(actionCreators.onRemoveItem(index));
  },

  onToggleItemCompleted: index =>
    dispatch(actionCreators.onToggleItemCompleted(index))
});

const mapStateToProps = store => ({
  items: store.item.items
});

class TodoList extends Component {
  render() {
    const items = this.props.items;
    return (
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <Todo
            item={item}
            onToggleItemCompleted={() =>
              this.props.onToggleItemCompleted(index)
            }
            onRemoveItem={() => this.props.onRemoveItem(index)}
          />
        )}
      />
    );
  }
}

TodoList.propTypes = {
  data: PropTypes.array,
  renderItem: PropTypes.func,
  onRemoveItem: PropTypes.func.isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
