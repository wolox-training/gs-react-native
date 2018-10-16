import TodoList from "./layout";
import { connect } from "react-redux";

import { actionCreators } from "../../../../redux/item/actions";

const mapDispatchToProps = dispatch => ({
  onRemoveItem: index => dispatch(actionCreators.onRemoveItem(index)),

  onToggleItemCompleted: index =>
    dispatch(actionCreators.onToggleItemCompleted(index))
});

const mapStateToProps = store => ({
  items: store.item.items
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
