import { selectionSortMathMin, selectionSortStandard } from './selectionSort';

describe('SELECTION SORT MathMin', () => {
  it('Should return ascending Order', () => {
    const raw = [6, 3, 8, 2, 1];
    expect(selectionSortMathMin(raw)).toStrictEqual([1, 2, 3, 6, 8]);
  });

  it('Should return ascending Order', () => {
    const raw = [303, 0, 808, 202, 1, 10006];
    expect(selectionSortMathMin(raw)).toStrictEqual([0, 1, 202, 303, 808, 10006]);
  });

  it('Should return ascending Order', () => {
    const raw = [3.03, 0.0001, 80.8, 2.02, 0.000000000000000000000000001, 1000.6];
    const result = [0.000000000000000000000000001, 0.0001, 2.02, 3.03, 80.8, 1000.6];
    expect(selectionSortMathMin(raw)).toStrictEqual(result);
  });
  it('Should return an Error because array of Strings', () => {
    const raw = ['w', 'z', 'y', 'b', 'c', 'a'];
    expect(() => selectionSortMathMin(raw)).toThrow();
  });
});

describe('SELECTION SORT FOR', () => {
  it('Should return ascending Order', () => {
    const raw = [6, 3, 8, 2, 1];
    expect(selectionSortStandard(raw)).toStrictEqual([1, 2, 3, 6, 8]);
  });

  it('Should return ascending Order', () => {
    const raw = [303, 0, 808, 202, 1, 10006];
    expect(selectionSortStandard(raw)).toStrictEqual([0, 1, 202, 303, 808, 10006]);
  });

  it('Should return ascending Order', () => {
    const raw = [3.03, 0.0001, 80.8, 2.02, 0.000000000000000000000000001, 1000.6];
    const result = [0.000000000000000000000000001, 0.0001, 2.02, 3.03, 80.8, 1000.6];
    expect(selectionSortStandard(raw)).toStrictEqual(result);
  });
  it('Should return ascending Order With String', () => {
    const raw = ['w', 'z', 'y', 'b', 'c', 'a'];
    const result = ['a', 'b', 'c', 'w', 'y', 'z'];
    expect(selectionSortStandard(raw)).toStrictEqual(result);
  });
});
