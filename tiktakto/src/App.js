import './App.css';
import React, { useState } from 'react';

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

  const startGame = () => {
    setGamePlaying(true);
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

  return (
    <div className="App">
      <Title></Title>
      <GameBoard></GameBoard>
      {<StartButton startGame={startGame}></StartButton>}
    </div>
  );
}

function Title() {
  return <h1>TikTakTo</h1>;
}

function GameBoard() {
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
        ></div>
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
        ></div>
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
        ></div>
      </div>
      <div id="row2">
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
        ></div>
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
        ></div>
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
        ></div>
      </div>
      <div id="row3">
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
        ></div>
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
        ></div>
        <div
          style={{ border: '1px solid black', height: '100%', width: '100%' }}
        ></div>
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
