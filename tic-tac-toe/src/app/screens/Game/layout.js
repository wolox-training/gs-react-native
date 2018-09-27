import React from 'react';

import styles from './styles.scss';
import Board from './components/Board';

function Game({ squares, status, moves, onClick }) {
  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board squares={squares} onClick={onClick} />
      </div>
      <div className={styles.gameInfo}>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
