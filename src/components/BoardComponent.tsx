import React, { FC, useEffect, useState } from 'react';
import { Board } from '../models/Board';
import { Cell } from '../models/Cells';
import { Player } from '../models/Player';
import CellComponent from './CellComponent';

interface BoardProps {
   board: Board;
   setBoard: (board: Board) => void;
   currentPlayer: Player | null;
   swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
   const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

   function click(cell: Cell) {
      if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
         selectedCell.moveFigure(cell);
         swapPlayer();
         setSelectedCell(null);
      } else {
         if (cell.figure?.color === currentPlayer?.colors) {
            setSelectedCell(cell);
         }
      }
   }

   useEffect(() => {
      highlightCells();
   }, [selectedCell]);

   function highlightCells() {
      board.highlightCells(selectedCell);
      updateBoard();
   }

   function updateBoard() {
      const newBoard = board.getCopyBoard();
      setBoard(newBoard);
   }


   return (
      <div className='board'>
         {board.cells.map((row, i) =>
            <React.Fragment key={i}>
               {row.map(cell =>
                  <CellComponent
                     click={click}
                     cell={cell}
                     key={cell.id}
                     selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                  />)}
            </React.Fragment>
         )}
      </div >
   );
};

export default BoardComponent;
