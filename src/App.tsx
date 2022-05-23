import React, { useEffect, useState } from 'react';
import "./App.css";
import BoardComponent from './components/BoardComponent';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigure();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.colors === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  return (
    <>
      <div className='timer'>
        <Timer
          restart={restart}
          currentPlayer={currentPlayer}
        />
      </div>
      <div className='app'>
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        />

        <div>
          <div className='turn'>{currentPlayer?.colors} turn...</div>
          <LostFigures
            title='Black figures'
            figures={board.lostBlackFigures}
          />
          <LostFigures
            title='White figures'
            figures={board.lostWhiteFigures}
          />
        </div>
      </div >
    </>
  );
};

export default App;
