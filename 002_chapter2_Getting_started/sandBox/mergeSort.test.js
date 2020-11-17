import mergeSort from './mergeSort';

describe('MERGE SORT', () => {
  it('Should return ascending Order', () => {
    const raw = [6, 3, 8, 2, 1];
    expect(mergeSort(raw)).toStrictEqual([1, 2, 3, 6, 8]);
  });

  it('Should return ascending Order', () => {
    const raw = [303, 0, 808, 202, 1, 10006];
    expect(mergeSort(raw)).toStrictEqual([0, 1, 202, 303, 808, 10006]);
  });

  it('Should return ascending Order', () => {
    const raw = [3.03, 0.0001, 80.8, 2.02, 0.000000000000000000000000001, 1000.6];
    const result = [0.000000000000000000000000001, 0.0001, 2.02, 3.03, 80.8, 1000.6];
    expect(mergeSort(raw)).toStrictEqual(result);
  });

  it('Should return ascending Order With String', () => {
    const raw = ['w', 'z', 'y', 'b', 'c', 'a'];
    const result = ['a', 'b', 'c', 'w', 'y', 'z'];
    expect(mergeSort(raw)).toStrictEqual(result);
  });

  it('Should return ascending Order With Date', () => {
    const raw = ['2011-11-14T17:25:45Z', '1811-11-14T17:25:45Z', '2011-12-14T17:25:45Z', '2011-12-02T11:25:45Z', '2000-11-14T17:25:45Z'];
    const result = ['1811-11-14T17:25:45Z', '2000-11-14T17:25:45Z', '2011-11-14T17:25:45Z', '2011-12-02T11:25:45Z', '2011-12-14T17:25:45Z'];
    expect(mergeSort(raw)).toStrictEqual(result);
  });
});
