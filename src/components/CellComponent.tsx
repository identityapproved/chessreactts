import React, { FC } from 'react';
import { Cell } from '../models/Cells';

interface CellProps {
   cell: Cell;
   selected: boolean;
   click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
   return (
      <div
         className={['cell', cell.color, selected ? 'selected' : '', /* cell.available && cell.figure ? 'highlight' : '' */].join(' ')
         }
         onClick={() => click(cell)}
         style={{ background: cell.available && cell.figure ? 'green' : '' }}
      >
         {cell.available && !cell.figure && <div className={'available'} />}
         {cell.figure?.logo && <img src={cell.figure.logo} alt='figure' />
         }
      </div >
   );
};

export default CellComponent;