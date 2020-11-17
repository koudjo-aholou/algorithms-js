import { insertionSortWhile, insertionSortFor } from './insertionSort';

describe('INSERTION SORT with while', () => {
  it('Should return descending Order', () => {
    const raw = [6, 3, 8, 2, 1];
    expect(insertionSortWhile(raw)).toStrictEqual([8, 6, 3, 2, 1]);
  });

  it('Should return descending Order', () => {
    const raw = [303, 0, 808, 202, 1, 10006];
    expect(insertionSortWhile(raw)).toStrictEqual([10006, 808, 303, 202, 1, 0]);
  });

  it('Should return descending Order', () => {
    const raw = [3.03, 0.0001, 80.8, 2.02, 0.000000000000000000000000001, 1000.6];
    const result = [1000.6, 80.8, 3.03, 2.02, 0.0001, 0.000000000000000000000000001];
    expect(insertionSortWhile(raw)).toStrictEqual(result);
  });
  it('Should return descending Order With String', () => {
    const raw = ['w', 'z', 'y', 'b', 'c', 'a'];
    const result = ['z', 'y', 'w', 'c', 'b', 'a'];
    expect(insertionSortWhile(raw)).toStrictEqual(result);
  });
});

describe('INSERTION SORT with for', () => {
  it('Should return descending Order', () => {
    const raw = [6, 3, 8, 2, 1];
    expect(insertionSortFor(raw)).toStrictEqual([8, 6, 3, 2, 1]);
  });

  it('Should return descending Order', () => {
    const raw = [303, 0, 808, 202, 1, 10006];
    const result = [10006, 808, 303, 202, 1, 0];
    expect(insertionSortFor(raw)).toStrictEqual(result);
  });

  it('Should return descending Order', () => {
    const raw = [3.03, 0.0001, 80.8, 2.02, 0.000000000000000000000000001, 1000.6];
    const result = [1000.6, 80.8, 3.03, 2.02, 0.0001, 0.000000000000000000000000001];
    expect(insertionSortFor(raw)).toStrictEqual(result);
  });
  it('Should return descending Order With String', () => {
    const raw = ['w', 'z', 'y', 'b', 'c', 'a'];
    const result = ['z', 'y', 'w', 'c', 'b', 'a'];
    expect(insertionSortFor(raw)).toStrictEqual(result);
  });
});
