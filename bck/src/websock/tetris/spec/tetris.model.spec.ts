import { TetrisModel } from '../tetris.model';
import { boardCreate, genBrickBoard } from '../tetris.service.gen.util';
import { BrickType } from '../tetris.type';
import * as _ from 'lodash';

describe('TetrisModel Test', () => {
  const tetrisModel = new TetrisModel();
  let createUid;
  it('createTest', () => {
    createUid = tetrisModel.createBoard();
    expect(typeof createUid).toBe('string');
  });

  it('selectTest', () => {
    const selected = tetrisModel.selectBoard(createUid);
    expect(selected.uid).toBe(createUid);
  });

  it('updateTest', () => {
    const testBoard = genBrickBoard(BrickType.I);
    tetrisModel.updateBoard(createUid, testBoard);
    const selected = tetrisModel.selectBoard(createUid);
    expect(selected.board).toBe(testBoard);
  });

  it('resetTest', () => {
    const testResttedBoard = boardCreate();
    tetrisModel.resetBoard(createUid);
    const selected = tetrisModel.selectBoard(createUid);
    expect(_.isEqual(testResttedBoard, selected.board)).toBe(true);
  });

  it('removeTest', () => {
    tetrisModel.removeBoard(createUid);
    const selected = tetrisModel.selectBoard(createUid);
    expect(selected).toBe(undefined);
  });
});
