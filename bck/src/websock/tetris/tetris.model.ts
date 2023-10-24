import { Board } from "./tetris.type";

export interface ITetrisModel {
  selectBoard();
  updateBoard();
  createBoard();
  resetBoard();
}

export class TetrisModel implements ITetrisModel {
  board: Board

  constructor(){
    this.createBoard();
  }

  selectBoard() {
    throw new Error("Method not implemented.");
  }
  updateBoard() {
    throw new Error("Method not implemented.");
  }
  createBoard() {
    throw new Error("Method not implemented.");
  }
  resetBoard() {
    throw new Error("Method not implemented.");
  }
}