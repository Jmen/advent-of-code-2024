import {numberOfSafeReports, numberOfSafeReportsWithRemoval} from "./day02";
import {puzzleInput} from "./puzzleInput";

describe('Day 02 - part 1', () => {
  // two element list
  // - not increasing or decreasing
  // - increasing
  // - decreasing
  // three element list
  // - not increasing or decreasing
  // - increasing
  // - decreasing
  // multiple reports

  it('returns 0 for two items - not increasing or decreasing', () => {
    expect(numberOfSafeReports([[1,1]])).toBe(0);
  });

  it('returns 1 for two items - increasing by 1', () => {
    expect(numberOfSafeReports([[1,2]])).toBe(1);
  });

  it('returns 1 for two items - increasing by 2', () => {
    expect(numberOfSafeReports([[1,3]])).toBe(1);
  });

  it('returns 1 for two items - increasing by 3', () => {
    expect(numberOfSafeReports([[1,4]])).toBe(1);
  });

  it('returns 0 for two items - increasing by more than 3', () => {
    expect(numberOfSafeReports([[1,5]])).toBe(0);
  });

  it('returns 0 for three items - not increasing or decreasing', () => {
    expect(numberOfSafeReports([[1,1,1]])).toBe(0);
  });

  it('returns 1 for three items - increasing ', () => {
    expect(numberOfSafeReports([[1,2,3]])).toBe(1);
  });

  it('returns 0 for three items - not continuously increasing ', () => {
    expect(numberOfSafeReports([[1,2,2]])).toBe(0);
  });

  it('returns 1 for four items - increasing ', () => {
    expect(numberOfSafeReports([[1,2,3,4]])).toBe(1);
  });

  it('returns 0 for four items - not continuously increasing ', () => {
    expect(numberOfSafeReports([[1,2,3,3]])).toBe(0);
  });

  it('returns 1 for two items - decreasing by 1', () => {
    expect(numberOfSafeReports([[2,1]])).toBe(1);
  });

  it('returns 1 for two reports - one increasing', () => {
    expect(numberOfSafeReports([[1,2], [1,1]])).toBe(1);
  });

  it('part 1', () => {
    const result = numberOfSafeReports(puzzleInput);

    console.log(result);
  });
});

describe('Day 02 - part 2', () => {
    it('part 2', () => {
        const result = numberOfSafeReportsWithRemoval(puzzleInput);

        console.log(result);
    });
});