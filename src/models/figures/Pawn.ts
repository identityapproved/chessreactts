import { Cell } from "../Cells";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/pawn-black.png";
import whiteLogo from "../../assets/pawn-white.png";

export class Pawn extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
      this.name = FigureNames.PAWN;
   }
}