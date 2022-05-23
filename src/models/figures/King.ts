import { Cell } from "../Cells";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/king-black.png";
import whiteLogo from "../../assets/king-white.png";

export class King extends Figure {
   isFirstStep: boolean = true;

   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
      this.name = FigureNames.KING;
   }

   canMove(target: Cell): boolean {
      if (!super.canMove(target)) return false;

      if (this.cell.isEmptyHorisontal(target) && this.isFirstStep && (target.x === this.cell.x + 2 || target.x === this.cell.x - 3)) return true;



      const dx = Math.abs(this.cell.x - target.x);
      const dy = Math.abs(this.cell.y - target.y);

      if ((dx === 1 && dy === 1) || (dx === 1 && dy === 1) || ((target.y === this.cell.y - 1 || target.y === this.cell.y + 1) && target.x === this.cell.x) || ((target.x === this.cell.x - 1 || target.x === this.cell.x + 1) && target.y === this.cell.y) && this.cell.board.getCell(target.x, target.y).isEmpty()) return true;

      return false;

   }

   moveFigure(target: Cell): void {
      super.moveFigure(target);
      this.isFirstStep = false;
   }
}