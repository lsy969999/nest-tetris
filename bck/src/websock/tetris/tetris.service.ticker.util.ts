import { genBrick } from './tetris.service.gen.util';
import { Board, BrickStatus } from './tetris.type';

export function isTickAble(board: Board): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j][1] === BrickStatus.DROPPING) {
        if (
          (board[i + 1] && board[i + 1][j][1] === BrickStatus.SETTED) ||
          (board[i - 1] && board[i - 1][j][1] === BrickStatus.SETTED) ||
          (board[j + 1] && board[i][j + 1][1] === BrickStatus.SETTED) ||
          (board[j - 1] && board[i][j - 1][1] === BrickStatus.SETTED)
        ) {
          return false;
        }
      }
    }
  }
  return true;
}

export function tickBoardDropBrick(board: Board): Board {
  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j][1] === BrickStatus.DROPPING) {
        if (!!board[i + 1]) {
          board[i + 1][j] = board[i][j];
          board[i][j] = genBrick();
        }
      }
    }
  }
  return board;
}

export function tickBoardSetBrick(board: Board): Board {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j][1] === BrickStatus.DROPPING) {
        board[i][j][1] = BrickStatus.SETTED;
      }
    }
  }
  return board;
}

export function tickLineBreakCheck(board: Board): number | undefined {
  //TODO
  return;
}

export function isBoardEnd(board: Board): boolean {
  //TODO
  return null;
}
