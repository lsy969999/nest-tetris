import { getRandomInt } from 'src/util/random';
import {
  Board,
  Brick,
  BrickColor,
  BrickPosition,
  BrickReserved,
  BrickStatus,
  BrickType,
} from './tetris.type';

export function boardCreate(row = 10, col = 20): Board {
  return Array.from({ length: col }, () =>
    Array.from(
      { length: row },
      (): Brick => [
        BrickType.NONE,
        BrickStatus.NONE,
        BrickPosition.UP,
        BrickColor.NONE,
        BrickReserved.NONE,
      ],
    ),
  );
}

export function genBrickBoard(brickType: BrickType): Board {
  if (brickType === BrickType.I) {
    return genBrickIBoard();
  } else if (brickType === BrickType.J) {
    return genBrickJBoard();
  } else if (brickType === BrickType.L) {
    return genBrickLBoard();
  } else if (brickType === BrickType.O) {
    return genBrickOBoard();
  } else if (brickType === BrickType.S) {
    return genBrickSBoard();
  } else if (brickType === BrickType.T) {
    return genBrickTBoard();
  } else if (brickType === BrickType.Z) {
    return genBrickZBoard();
  } else {
    return genBrickNoneBoard();
  }
}

function genBrickIBoard(): Board {
  return [
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(BrickType.I),
      genBrick(BrickType.I),
      genBrick(BrickType.I, BrickReserved.CENTER),
      genBrick(BrickType.I),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
  ];
}

function genBrickJBoard(): Board {
  return [
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(BrickType.J),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(BrickType.J),
      genBrick(BrickType.J),
      genBrick(BrickType.J, BrickReserved.CENTER),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
  ];
}

function genBrickLBoard(): Board {
  return [
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(BrickType.L),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(BrickType.L, BrickReserved.CENTER),
      genBrick(BrickType.L),
      genBrick(BrickType.L),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
  ];
}

//NoCenter
function genBrickOBoard(): Board {
  return [
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(BrickType.O),
      genBrick(BrickType.O),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(BrickType.O),
      genBrick(BrickType.O),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
  ];
}

function genBrickSBoard(): Board {
  return [
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(BrickType.S),
      genBrick(BrickType.S),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(BrickType.S, BrickReserved.CENTER),
      genBrick(BrickType.S),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
  ];
}

function genBrickTBoard(): Board {
  return [
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(BrickType.T),
      genBrick(BrickType.T, BrickReserved.CENTER),
      genBrick(BrickType.T),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(BrickType.T),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
  ];
}

function genBrickZBoard(): Board {
  return [
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(BrickType.Z),
      genBrick(BrickType.Z),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(BrickType.Z, BrickReserved.CENTER),
      genBrick(BrickType.Z),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
  ];
}

function genBrickNoneBoard(): Board {
  return [
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
    [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
    ],
  ];
}

export function genBrick(brickType?: BrickType, reservedType?: BrickReserved): Brick {
  if (brickType === BrickType.I) {
    return genBrickI(reservedType);
  } else if (brickType === BrickType.J) {
    return genBrickJ();
  } else if (brickType === BrickType.L) {
    return genBrickL();
  } else if (brickType === BrickType.O) {
    return genBrickO();
  } else if (brickType === BrickType.S) {
    return genBrickS();
  } else if (brickType === BrickType.T) {
    return genBrickT();
  } else if (brickType === BrickType.Z) {
    return genBrickZ();
  } else {
    return genBrickNONE();
  }
}

function genBrickI(reservedType?: BrickReserved): Brick {
  return [
    BrickType.I,
    BrickStatus.GENERATING,
    BrickPosition.UP,
    BrickColor.SKY,
    reservedType || BrickReserved.NONE,
  ];
}

function genBrickJ(reservedType?: BrickReserved): Brick {
  return [
    BrickType.J,
    BrickStatus.GENERATING,
    BrickPosition.UP,
    BrickColor.BLUE,
    reservedType || BrickReserved.NONE,
  ];
}

function genBrickL(reservedType?: BrickReserved): Brick {
  return [
    BrickType.L,
    BrickStatus.GENERATING,
    BrickPosition.UP,
    BrickColor.ORANGE,
    reservedType || BrickReserved.NONE,
  ];
}

function genBrickO(reservedType?: BrickReserved): Brick {
  return [
    BrickType.O,
    BrickStatus.GENERATING,
    BrickPosition.UP,
    BrickColor.YELLOW,
    reservedType || BrickReserved.NONE,
  ];
}

function genBrickS(reservedType?: BrickReserved): Brick {
  return [
    BrickType.S,
    BrickStatus.GENERATING,
    BrickPosition.UP,
    BrickColor.GREEN,
    reservedType || BrickReserved.NONE,
  ];
}

function genBrickT(reservedType?: BrickReserved): Brick {
  return [
    BrickType.T,
    BrickStatus.GENERATING,
    BrickPosition.UP,
    BrickColor.PURPLE,
    reservedType || BrickReserved.NONE,
  ];
}

function genBrickZ(reservedType?: BrickReserved): Brick {
  return [
    BrickType.Z,
    BrickStatus.GENERATING,
    BrickPosition.UP,
    BrickColor.RED,
    reservedType || BrickReserved.NONE,
  ];
}

function genBrickNONE(reservedType?: BrickReserved): Brick {
  return [
    BrickType.NONE,
    BrickStatus.NONE,
    BrickPosition.NONE,
    BrickColor.NONE,
    reservedType || BrickReserved.NONE,
  ];
}

export function getRandomNextBrick(): BrickType {
  const rVal = getRandomInt(1, 7);
  if (rVal === 1) {
    return BrickType.I;
  } else if (rVal === 2) {
    return BrickType.J;
  } else if (rVal === 3) {
    return BrickType.L;
  } else if (rVal === 4) {
    return BrickType.O;
  } else if (rVal === 5) {
    return BrickType.S;
  } else if (rVal === 6) {
    return BrickType.T;
  } else if (rVal === 7) {
    return BrickType.Z;
  } else {
    return BrickType.NONE;
  }
}
