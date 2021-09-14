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
  const [draw, setDraw] = useState(false);
  const [playerTurn, setPlayerTurn] = useState('X'); // player x will start game, playerTurn will track turn
  const [boardState, setBoardState] = useState(emptyBoardState);
  const [turnCount, setTurnCount] = useState(0);

  useEffect(() => {
    checkRowWin();
    checkColumnWin();
    checkDiagWin();
    if (turnCount === 9 && !winner) {
      drawGame();
    }
  }, [boardState]);

  const drawGame = () => {
    setDraw(true);
    setGamePlaying(false);
  };

  const checkRowWin = () => {
    boardState.map((row, rowIdx) => {
      if (row[0] === 'X' && row[1] === 'X' && row[2] === 'X') {
        setWinner('X');
        endGame();
        return true;
      }
      if (row[0] === 'O' && row[1] === 'O' && row[2] === 'O') {
        setWinner('O');
        endGame();
        return true;
      }
    });
  };

  const checkColumnWin = () => {
    for (let i = 0; i < 2; i++) {
      if (
        boardState[0][i] === 'X' &&
        boardState[1][i] === 'X' &&
        boardState[2][i] === 'X'
      ) {
        setWinner('X');
        endGame();
        return true;
      }
      if (
        boardState[0][i] === 'O' &&
        boardState[1][i] === 'O' &&
        boardState[2][i] === 'O'
      ) {
        setWinner('');
        endGame();
        return true;
      }
    }
  };

  const checkDiagWin = () => {
    if (
      (boardState[0][0] === 'X' &&
        boardState[1][1] === 'X' &&
        boardState[2][2] === 'X') ||
      (boardState[0][2] === 'X' &&
        boardState[1][1] === 'X' &&
        boardState[2][0] === 'X')
    ) {
      setWinner('X');
      endGame();
      return true;
    }

    if (
      (boardState[0][0] === 'O' &&
        boardState[1][1] === 'O' &&
        boardState[2][2] === 'O') ||
      (boardState[0][2] === 'O' &&
        boardState[1][1] === 'O' &&
        boardState[2][0] === 'O')
    ) {
      setWinner('O');
      endGame();
      return true;
    }
  };

  const startGame = () => {
    setGamePlaying(true);
    if (playerTurn !== 'X') {
      setPlayerTurn('X');
    }
  };

  const endGame = () => {
    setGamePlaying(false);
  };

  const restartGame = () => {
    setBoardState(emptyBoardState);
    setTurnCount(0);
    setWinner(null);
  };

  const nextTurn = () => {
    if (playerTurn === 'X') {
      setPlayerTurn('O');
    }
    if (playerTurn === 'O') {
      setPlayerTurn('X');
    }
    setTurnCount(turnCount + 1);
  };

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1em',
      }}
    >
      <Title
        draw={draw}
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
      {!gamePlaying && !winner && !draw && (
        <StartButton startGame={startGame}></StartButton>
      )}
      {winner || draw ? (
        <RestartButton restartGame={restartGame}></RestartButton>
      ) : null}
    </div>
  );
}

function Title({ winner, playerTurn, gamePlaying, draw }) {
  return (
    <div>
      <h1>TikTakTo</h1>
      {gamePlaying && !draw ? (
        <h2>{playerTurn} turn</h2>
      ) : winner ? (
        <h2>{winner} wins</h2>
      ) : draw ? (
        <h2>draw</h2>
      ) : (
        ''
      )}
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
          style={{
            border: '1px solid black',

            height: '200px',
            width: '200px',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '100px',
            fontWeight: 'bold',
          }}
          onMouseOver={() => highlightSquare(0, 0)}
          onClick={() => choseSquare(0, 0)}
        >
          {boardState[0][0]}
        </div>
        <div
          style={{
            border: '1px solid black',

            height: '200px',
            width: '200px',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '100px',
            fontWeight: 'bold',
          }}
          onMouseOver={() => highlightSquare(1, 0)}
          onClick={() => choseSquare(1, 0)}
        >
          {boardState[1][0]}
        </div>
        <div
          style={{
            border: '1px solid black',
            maxmaxHeight: '200px',
            height: '200px',
            width: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '100px',
            fontWeight: 'bold',
          }}
          onMouseOver={() => highlightSquare(2, 0)}
          onClick={() => choseSquare(2, 0)}
        >
          {boardState[2][0]}
        </div>
      </div>
      <div id="row2">
        <div
          style={{
            border: '1px solid black',

            height: '200px',
            width: '200px',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '100px',
            fontWeight: 'bold',
          }}
          onMouseOver={() => highlightSquare(0, 1)}
          onClick={() => choseSquare(0, 1)}
        >
          {boardState[0][1]}
        </div>
        <div
          style={{
            border: '1px solid black',

            height: '200px',
            width: '200px',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '100px',
            fontWeight: 'bold',
          }}
          onMouseOver={() => highlightSquare(1, 1)}
          onClick={() => choseSquare(1, 1)}
        >
          {boardState[1][1]}
        </div>
        <div
          style={{
            border: '1px solid black',

            height: '200px',
            width: '200px',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '100px',
            fontWeight: 'bold',
          }}
          onMouseOver={() => highlightSquare(2, 1)}
          onClick={() => choseSquare(2, 1)}
        >
          {boardState[2][1]}
        </div>
      </div>
      <div id="row3">
        <div
          style={{
            border: '1px solid black',

            height: '200px',
            width: '200px',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '100px',
            fontWeight: 'bold',
          }}
          onMouseOver={() => highlightSquare(0, 2)}
          onClick={() => choseSquare(0, 2)}
        >
          {boardState[0][2]}
        </div>
        <div
          style={{
            border: '1px solid black',

            height: '200px',
            width: '200px',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '100px',
            fontWeight: 'bold',
          }}
          onMouseOver={() => highlightSquare(1, 2)}
          onClick={() => choseSquare(1, 2)}
        >
          {boardState[1][2]}
        </div>
        <div
          style={{
            border: '1px solid black',

            height: '200px',
            width: '200px',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '100px',
            fontWeight: 'bold',
          }}
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
