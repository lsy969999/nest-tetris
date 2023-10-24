import { Board, BrickStatus } from './tetris.type';

export function isBrickDropOrGen(board: Board): BrickStatus {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j][1] === BrickStatus.DROPPING) {
        return BrickStatus.DROPPING;
      }
      if (board[i][j][1] === BrickStatus.GENERATING) {
        return BrickStatus.GENERATING;
      }
    }
  }

  return BrickStatus.NONE;
}

export function changeBrickStatusGenToDrop(board: Board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j][1] === BrickStatus.GENERATING) {
        board[i][j][1] = BrickStatus.DROPPING;
      }
    }
  }
}
