import logo from './logo.svg';
import './App.css';

// Component for thhe board
// componets for the player icons (x o)
// start mechanic (begin trackign the game state)
// know when  3 x's happen or 3 o's happen (flip game state from running to complete, with winner, or draw state)

function App() {
  return (
    <div className="App">
      <Title></Title>
      <GameBoard></GameBoard>
      <StartButton></StartButton>
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

function StartButton() {
  return (
    <button>Start Game</button> // this button should switch to restart or be invisible depending on game state
  );
}

export default App;
