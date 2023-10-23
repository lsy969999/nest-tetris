import {
  changeBrickStatusCreateToDropping,
  genBrick,
  nextBrickSelector,
} from './brick.enum';

describe('BrickTest', () => {
  it('test', () => {
    const gb = genBrick();
    console.log(gb);
    const gbline = [[gb]];
    const to = changeBrickStatusCreateToDropping(gbline);
    console.log(to);
  });

  it('test2', () => {
    const next = nextBrickSelector();
    console.log(next);
  });
});
