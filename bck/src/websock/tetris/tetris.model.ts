import { boardCreate } from "./tetris.service.util";
import { Board } from "./tetris.type";
import { v4 as uuidv4 } from 'uuid';
export interface ITetrisModel {
  selectBoard(uid: string): TetrisModelBoard;
  updateBoard(uid: string, board: Board);
  createBoard(): string;
  resetBoard(uid: string);
  removeBoard(uid: string);
}

type BoardMap = {
  [uid: string]: TetrisModelBoard
}

export class TetrisModel implements ITetrisModel {
  boardsMap: BoardMap = {}
  option = {
    row: 10,
    col: 20,
  }

  constructor(){}

  selectBoard(uid: string): TetrisModelBoard {
    return this.boardsMap[uid]
  }
  updateBoard(uid: string, board: Board) {
    const res = this.selectBoard(uid);
    res.board = board;
  }
  createBoard(): string {
    const uuid = uuidv4()
    const board = new TetrisModelBoard()
    board.board = boardCreate(this.option.row, this.option.col);
    this.boardsMap[uuid] = board;
    return uuid;
  }
  resetBoard(uid: string) {
    this.boardsMap[uid].board = boardCreate(this.option.row, this.option.col);
  }
  removeBoard(uid: string) {
    delete this.boardsMap[uid]
  }
}

export class TetrisModelBoard {
  board: Board
  uid: string
}