import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionsCreators } from '../../../redux/Game/actions';

import Game from './layout';

function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  let winner = null;
  lines.forEach(([a, b, c]) => {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner = squares[a];
    }
  });
  return winner;
}
class GameContainer extends Component {
  handleClick = i => {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    const state = {
      history: history.concat([
        {
          squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.props.xIsNext
    };

    this.props.clickSquare(state);
  };
  jumpTo(step) {
    this.props.makeMove({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    }

    return <Game squares={current.squares} status={status} moves={moves} onClick={this.handleClick} />;
  }
}
const mapStateToProps = store => ({
  history: store.game.history,
  stepNumber: store.game.stepNumber,
  xIsNext: store.game.xIsNext
});

const mapDispatchToProps = dispatch => ({
  clickSquare: values => {
    dispatch(actionsCreators.clickSquare(values));
  },
  makeMove: values => {
    dispatch(actionsCreators.makeMove(values));
  }
});

GameContainer.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object),
  stepNumber: PropTypes.number,
  xIsNext: PropTypes.bool,
  clickSquare: PropTypes.func.isRequired,
  makeMove: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
