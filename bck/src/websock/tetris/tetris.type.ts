export enum BrickType {
  NONE = 0,
  I = 1,
  J = 2,
  L = 3,
  O = 4,
  S = 5,
  T = 6,
  Z = 7,
}

export enum BrickStatus {
  NONE = 0,
  SETTED = 1,
  DROPPING = 2,
  GENERATING = 3,
}

export enum BrickPosition {
  NONE = 0,
  UP = 1,
  DOWN = 2,
  LEFT = 3,
  RIGHT = 4,
}

export enum BrickColor {
  NONE = 0,
  YELLOW = 1,
  SKY = 2,
  BLUE = 3,
  ORANGE = 4,
  RED = 5,
  GREEN = 6,
  PURPLE = 7,
}

export enum BrickReserved {
  NONE = 0,
  CENTER = 1,
}

export type Brick = [
  BrickType,
  BrickStatus,
  BrickPosition,
  BrickColor,
  BrickReserved,
];

export type Board = Brick[][];
export type BrickLine = Brick[];

export enum TetrisInput {
  UP = 'UP',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  DOWN = 'DOWN',
  HOLD = 'HOLD',
}

export enum TetrisStatus {
  START = 'START',
  END = 'END',
  PAUSE = 'PAUSE',
}
