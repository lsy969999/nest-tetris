// import { getRandomInt } from 'src/util/random';

// export enum BrickType {
//   NONE = 0,
//   I = 1,
//   J = 2,
//   L = 3,
//   O = 4,
//   S = 5,
//   T = 6,
//   Z = 7,
// }

// export enum BrickStatus {
//   NONE = 0,
//   SETTED = 1,
//   DROPPING = 2,
//   CREATING = 3,
// }

// export enum BrickPosition {
//   NONE = 0,
//   UP = 1,
//   DOWN = 2,
//   LEFT = 3,
//   RIGHT = 4,
// }

// export enum BrickColor {
//   NONE = 0,
//   YELLOW = 1,
//   SKY = 2,
//   BLUE = 3,
//   ORANGE = 4,
//   RED = 5,
//   GREEN = 6,
//   PURPLE = 7,
// }

// export enum BrickReserved {
//   NONE = 0,
// }

// export type Brick = [
//   BrickType,
//   BrickStatus,
//   BrickPosition,
//   BrickColor,
//   BrickReserved,
// ];

// export function createBrickLine(type: BrickType): Brick[][] {
//   if (type === BrickType.I) {
//     return createBrickILine();
//   } else if (type === BrickType.J) {
//     return createBrickJLine();
//   } else if (type === BrickType.L) {
//     return createBrickLLine();
//   } else if (type === BrickType.O) {
//     return createBrickOLine();
//   } else if (type === BrickType.S) {
//     return createBrickSLine();
//   } else if (type === BrickType.T) {
//     return createBrickTLine();
//   } else if (type === BrickType.Z) {
//     return createBrickZLine();
//   } else {
//     return createBrickTLine();
//   }
// }

// export function genBrick(type?: BrickType, color?: BrickColor): Brick {
//   if (type) {
//     return [
//       type,
//       BrickStatus.CREATING,
//       BrickPosition.UP,
//       color || BrickColor.NONE,
//       BrickReserved.NONE,
//     ];
//   } else {
//     return [
//       BrickType.NONE,
//       BrickStatus.NONE,
//       BrickPosition.UP,
//       BrickColor.NONE,
//       BrickReserved.NONE,
//     ];
//   }
// }

// export function createBrickILine(): Brick[][] {
//   return [
//     [
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//     ],
//     [
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(BrickType.I, BrickColor.SKY),
//       genBrick(BrickType.I, BrickColor.SKY),
//       genBrick(BrickType.I, BrickColor.SKY),
//       genBrick(BrickType.I, BrickColor.SKY),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//     ],
//   ];
// }

// export function createBrickJLine(): Brick[][] {
//   return [
//     [
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(BrickType.J, BrickColor.BLUE),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//     ],
//     [
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(BrickType.J, BrickColor.BLUE),
//       genBrick(BrickType.J, BrickColor.BLUE),
//       genBrick(BrickType.J, BrickColor.BLUE),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//     ],
//   ];
// }

// export function createBrickLLine(): Brick[][] {
//   return [
//     [
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(BrickType.L, BrickColor.ORANGE),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//     ],
//     [
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(BrickType.L, BrickColor.ORANGE),
//       genBrick(BrickType.L, BrickColor.ORANGE),
//       genBrick(BrickType.L, BrickColor.ORANGE),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//     ],
//   ];
// }

// export function createBrickOLine(): Brick[][] {
//   return [
//     [
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(BrickType.O, BrickColor.YELLOW),
//       genBrick(BrickType.O, BrickColor.YELLOW),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//     ],
//     [
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(BrickType.O, BrickColor.YELLOW),
//       genBrick(BrickType.O, BrickColor.YELLOW),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//     ],
//   ];
// }

// export function createBrickSLine(): Brick[][] {
//   return [
//     [
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(BrickType.S, BrickColor.GREEN),
//       genBrick(BrickType.S, BrickColor.GREEN),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//     ],
//     [
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(BrickType.S, BrickColor.GREEN),
//       genBrick(BrickType.S, BrickColor.GREEN),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//     ],
//   ];
// }

// export function createBrickZLine(): Brick[][] {
//   return [
//     [
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(BrickType.Z, BrickColor.RED),
//       genBrick(BrickType.Z, BrickColor.RED),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//     ],
//     [
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(BrickType.Z, BrickColor.RED),
//       genBrick(BrickType.Z, BrickColor.RED),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//     ],
//   ];
// }

// export function createBrickTLine(): Brick[][] {
//   return [
//     [
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(BrickType.T, BrickColor.PURPLE),
//       genBrick(BrickType.T, BrickColor.PURPLE),
//       genBrick(BrickType.T, BrickColor.PURPLE),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//     ],
//     [
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(BrickType.T, BrickColor.PURPLE),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//       genBrick(),
//     ],
//   ];
// }

// export function changeBrickStatusCreateToDropping(game: Brick[][]): Brick[][] {
//   for (let i = 0; i < game.length; i++) {
//     for (let j = 0; j < game[i].length; j++) {
//       if (game[i][j][1] === BrickStatus.CREATING) {
//         game[i][j][1] = BrickStatus.DROPPING;
//       }
//     }
//   }
//   return game;
// }

// export function nextBrickSelector(): BrickType {
//   const rval = getRandomInt(1, 7);
//   if (rval === 1) {
//     return BrickType.I;
//   } else if (rval === 2) {
//     return BrickType.J;
//   } else if (rval === 3) {
//     return BrickType.L;
//   } else if (rval === 4) {
//     return BrickType.O;
//   } else if (rval === 5) {
//     return BrickType.S;
//   } else if (rval === 6) {
//     return BrickType.T;
//   } else {
//     //7
//     return BrickType.Z;
//   }
// }
// /**
//  * Brick.I
//  * [
//  *  [0,0,0,0,1,0,0,0,0,0],
//  *  [0,0,0,0,1,0,0,0,0,0],
//  *  [0,0,0,0,1,0,0,0,0,0],
//  *  [0,0,0,0,1,0,0,0,0,0],
//  * ]
//  *
//  * Brick.J
//  * [
//  *  [0,0,0,0,1,0,0,0,0,0],
//  *  [0,0,0,0,1,0,0,0,0,0],
//  *  [0,0,0,1,1,0,0,0,0,0],
//  * ]
//  *
//  * Brick.L
//  * [
//  *  [0,0,0,0,1,0,0,0,0,0],
//  *  [0,0,0,0,1,0,0,0,0,0],
//  *  [0,0,0,0,1,1,0,0,0,0],
//  * ]
//  *
//  * Brick.O
//  * [
//  *  [0,0,0,0,1,1,0,0,0,0],
//  *  [0,0,0,0,1,1,0,0,0,0],
//  * ]
//  *
//  * Brick.S
//  * [
//  *  [0,0,0,0,1,1,0,0,0,0],
//  *  [0,0,0,1,1,0,0,0,0,0],
//  * ]
//  *
//  * Brick.T
//  * [
//  *  [0,0,0,0,1,1,1,0,0,0],
//  *  [0,0,0,0,0,1,0,0,0,0],
//  * ]
//  *
//  * Brick.Z
//  * [
//  *  [0,0,0,1,1,0,0,0,0,0],
//  *  [0,0,0,0,1,1,0,0,0,0],
//  * ]
//  */
