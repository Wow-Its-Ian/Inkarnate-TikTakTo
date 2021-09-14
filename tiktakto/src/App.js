import './App.css';
import React, { useState, useEffect } from 'react';

// Component for thhe board
// componets for the player icons (x o)
// start mechanic (begin trackign the game state)
// know when  3 x's happen or 3 o's happen (flip game state from running to complete, with winner, or draw state)

const emptyBoardState = [
  ['', '', ''], // row 1 (boardState[0][0] - boardState[0][2])
  ['', '', ''], // row 3 (boardState[1][0] - boardState[1][2])
  ['', '', ''], // row 4 (boardState[2][0] - boardState[2][2])
];

function App() {
  const [gamePlaying, setGamePlaying] = useState(false); // false will mean there is no game, true will mean there is
  console.log('gamePlaying: ', gamePlaying);
  const [winner, setWinner] = useState(null); // false will mean there is no game, true will mean there is
  const [playerTurn, setPlayerTurn] = useState('x'); // player x will start game, playerTurn will track turn
  const [boardState, setBoardState] = useState(emptyBoardState);

  useEffect(() => {
    boardState.map((row, rowIdx) => {
      row.map((cell, cellIdx) => {});
    });
  }, [boardState]);

  const checkRowWin = () => {
    boardState.map((row, rowIdx) => {
      row.map((cell, cellIdx) => {});
    });
  };

  const startGame = () => {
    setGamePlaying(true);
    if (playerTurn !== 'x') {
      setPlayerTurn('x');
    }
  };

  // const endGame = () => {
  //   setGamePlaying(false);
  // };

  const restartGame = () => {
    setBoardState(emptyBoardState);
    setWinner(null);
  };

  const completeGame = (winner) => {
    setWinner(winner);
  };

  const nextTurn = () => {
    if (playerTurn === 'x') {
      setPlayerTurn('o');
    }
    if (playerTurn === 'o') {
      setPlayerTurn('x');
    }
  };

  return (
    <div className="App">
      <Title
        winner={winner}
        playerTurn={playerTurn}
        gamePlaying={gamePlaying}
      ></Title>
      <GameBoard
        nextTurn={nextTurn}
        playerTurn={playerTurn}
        gamePlaying={gamePlaying}
        setBoardState={setBoardState}
        boardState={boardState}
      ></GameBoard>
      {<StartButton startGame={startGame}></StartButton>}
    </div>
  );
}

function Title({ winner, playerTurn, gamePlaying }) {
  return (
    <div>
      <h1>TikTakTo</h1>
      {gamePlaying ? (
        <h2>{playerTurn} turn</h2>
      ) : winner ? (
        <h2>{winner} wins</h2>
      ) : (
        ''
      )}
      ;
    </div>
  );
}

function GameBoard({
  boardState,
  setBoardState,
  nextTurn,
  playerTurn,
  gamePlaying,
}) {
  const highlightSquare = (row, cell) => {
    // const boardCopy = [...boardState];
    // const rowCopy = [...boardCopy[row]];

    if (boardState[row][cell] === '') {
      console.log(row, cell);
    }
  };

  const choseSquare = (row, cell) => {
    if (gamePlaying && boardState[row][cell] === '') {
      const boardCopy = [...boardState];
      console.log('boardCopy: ', boardCopy);
      const rowCopy = [...boardCopy[row]];
      rowCopy[cell] = playerTurn;
      boardCopy[row] = rowCopy;

      setBoardState(boardCopy);
      nextTurn();
    }
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr',
        gridTemplateColumns: '1fr 1fr 1fr',

        height: '500px',
        width: '500px',
      }}
    >
      <div id="row1">
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
          onMouseOver={() => highlightSquare(0, 0)}
          onClick={() => choseSquare(0, 0)}
        >
          {boardState[0][0]}
        </div>
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
          onMouseOver={() => highlightSquare(1, 0)}
          onClick={() => choseSquare(1, 0)}
        >
          {boardState[1][0]}
        </div>
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
          onMouseOver={() => highlightSquare(2, 0)}
          onClick={() => choseSquare(2, 0)}
        >
          {boardState[2][0]}
        </div>
      </div>
      <div id="row2">
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
          onMouseOver={() => highlightSquare(0, 1)}
          onClick={() => choseSquare(0, 1)}
        >
          {boardState[0][1]}
        </div>
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
          onMouseOver={() => highlightSquare(1, 1)}
          onClick={() => choseSquare(1, 1)}
        >
          {boardState[1][1]}
        </div>
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
          onMouseOver={() => highlightSquare(2, 1)}
          onClick={() => choseSquare(2, 1)}
        >
          {boardState[2][1]}
        </div>
      </div>
      <div id="row3">
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
          onMouseOver={() => highlightSquare(0, 2)}
          onClick={() => choseSquare(0, 2)}
        >
          {boardState[0][2]}
        </div>
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
          onMouseOver={() => highlightSquare(1, 2)}
          onClick={() => choseSquare(1, 2)}
        >
          {boardState[1][2]}
        </div>
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
          onMouseOver={() => highlightSquare(2, 2)}
          onClick={() => choseSquare(2, 2)}
        >
          {boardState[2][2]}
        </div>
      </div>
    </div>
  );
}

function StartButton({ startGame }) {
  return (
    <button onClick={startGame}>Start Game</button> // this button should switch to restart or be invisible depending on game state
  );
}

// function EndButton({ endGame }) {
//   return (
//     <button onClick={endGame}>End Game</button>
//   );
// }

function RestartButton({ restartGame }) {
  return <button onClick={restartGame}>Restart Game</button>;
}

export default App;
