import { doubledNumbers, halvedNumbers, multipliedNumbers } from './exercise';

describe('5-map-basics', () => {
  it('should have a new array with the numbers doubled', () => {
    expect(doubledNumbers).toEqual([2, 4, 6, 8, 10, 12, 14, 16]);
  });
  it('should have a new array with the numbers divided by 2', () => {
    expect(halvedNumbers).toEqual([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]);
  });
  it('should have a new array with the numbers multiplied by themselves', () => {
    expect(multipliedNumbers).toEqual([1, 4, 9, 16, 25, 36, 49, 64]);
  });
});
