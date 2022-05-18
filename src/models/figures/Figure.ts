import { Cell } from "../Cells";
import { Colors } from "../Colors";
import logo from "../../assets/bishop-black.png";


export enum FigureNames {
   FIGURE = "figure",
   KING = "king",
   QUEEN = "queen",
   KNIGHT = "knight",
   PAWN = "pawn",
   ROOK = "rook",
   BISHOP = "bishop"
}

export class Figure {
   color: Colors;
   logo: typeof logo | null;
   cell: Cell;
   name: FigureNames;
   id: number;

   constructor(color: Colors, cell: Cell) {
      this.color = color;
      this.cell = cell;
      this.cell.figure = this;
      this.logo = null;
      this.name = FigureNames.FIGURE;
      this.id = Math.random();
   };

   canMove(target: Cell): boolean {
      return true;
   }

   moveFigure(target: Cell) { };
}