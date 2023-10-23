export enum BrickType {
  I = 0,
  J = 1,
  L = 2,
  O = 3,
  S = 4,
  T = 5,
  Z = 6,
}

export enum BrickStatus {
  SETTED = 0,
  DROPPING = 1,
  CREATING = 2,
}

export enum BrickPosition {
  UP = 0,
  DOWN = 1,
  LEFT = 2,
  RIGHT = 3,
}

export enum BrickColor {
  YELLOW = 0,
  SKY = 1,
  BLUE = 2,
  ORANGE = 3,
  RED = 4,
  GREEN = 5,
  PURPLE = 6,
}

export enum BrickReserved {

}

export type Brick = [BrickType, BrickStatus, BrickPosition, BrickColor, BrickReserved];

/**
 * Brick.I
 * [
 *  [0,0,0,0,1,0,0,0,0,0],
 *  [0,0,0,0,1,0,0,0,0,0],
 *  [0,0,0,0,1,0,0,0,0,0],
 *  [0,0,0,0,1,0,0,0,0,0],
 * ]
 *
 * Brick.J
 * [
 *  [0,0,0,0,1,0,0,0,0,0],
 *  [0,0,0,0,1,0,0,0,0,0],
 *  [0,0,0,1,1,0,0,0,0,0],
 * ]
 *
 * Brick.L
 * [
 *  [0,0,0,0,1,0,0,0,0,0],
 *  [0,0,0,0,1,0,0,0,0,0],
 *  [0,0,0,0,1,1,0,0,0,0],
 * ]
 *
 * Brick.O
 * [
 *  [0,0,0,0,1,1,0,0,0,0],
 *  [0,0,0,0,1,1,0,0,0,0],
 * ]
 *
 * Brick.S
 * [
 *  [0,0,0,0,1,1,0,0,0,0],
 *  [0,0,0,1,1,0,0,0,0,0],
 * ]
 *
 * Brick.T
 * [
 *  [0,0,0,0,1,1,1,0,0,0],
 *  [0,0,0,0,0,1,0,0,0,0],
 * ]
 *
 * Brick.Z
 * [
 *  [0,0,0,1,1,0,0,0,0,0],
 *  [0,0,0,0,1,1,0,0,0,0],
 * ]
 */
