import { genBrick } from './tetris.service.gen.util';
import { Board, BrickStatus } from './tetris.type';

//board[i][j]의 j의 length(마지막을 뒤져서 ok면 움직이자)
export function moveBrickRight(board: Board): Board {
  //right col scan
  for (let i = 0; i < board.length; i++) {
    const rightCols = board[i][board[i].length]
    if(rightCols[1] === BrickStatus.DROPPING){
      return board;
    }
  }
  
  //왼쪽 DROPPINGBRICK 오른쪽 이동
  for (let i = 0; i < board.length; i++) {
    for (let j = board[i].length; j >= 0; j--) {
      if(board[i][j-1]){
        if(board[i][j-1][1] === BrickStatus.DROPPING){
          board[i][j] = board[i][j-1]
          board[i][j-1] = genBrick();
        } 
      }
    }
  }
  return board;
}

//board[i][j]의 j의 length(처음을 뒤져서 ok면 움직이자)
export function moveBrickLeft(board: Board): Board {
  //left col scan
  for (let i = 0; i < board.length; i++) {
    const leftCols = board[i][0]
    if(leftCols[1] === BrickStatus.DROPPING){
      return board;
    }
  }

  //오른쪽 DROPPINGBRICK 왼쪽 이동
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if(board[i][j+1]){
        if(board[i][j+1][1] === BrickStatus.DROPPING){
          board[i][j] = board[i][j+1]
          board[i][j+1] = genBrick();
        } 
      }
    }
  }
  return board;
}

export function rotateBrickColckWise(board: Board): Board {
  //TODO
  return board;
}

export function rotateBrickCounterClockWise(board: Board): Board {
  //TODO
  return board;
}

export function moveBrickBelow(board: Board): Board {
  //TODO
  return board;
}
