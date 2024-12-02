import {distance, similarity} from "./day01";
import { list1, list2 } from "./puzzleInput";

// [ Test cases ]
//
// single pair
// - no difference in distance
// - difference in distance
// multiple pairs - sorted
// - difference in distance
// multiple pairs - unsorted
// - difference in distance

describe('Day 01 - part 1', () => {
    it.each([
        { list1: [0], list2: [0], expected: 0 },
        { list1: [1], list2: [1], expected: 0 },
        { list1: [2], list2: [2], expected: 0 },
    ])('should return 0 for a single pair with no difference in distance', (data) => {
        const result = distance(data.list1, data.list2);
        expect(result).toBe(data.expected);
    });

    it.each([
        { list1: [0], list2: [1], expected: 1 },
        { list1: [1], list2: [2], expected: 1 },
        { list1: [1], list2: [3], expected: 2 },
    ])('should return the difference in distance for a single pair with difference in distance', (data) => {
        const result = distance(data.list1, data.list2);
        expect(result).toBe(data.expected);
    });

    it.each([
        { list1: [0, 0], list2: [0, 0], expected: 0 },
        { list1: [0, 1], list2: [0, 1], expected: 0 },
        { list1: [0, 1], list2: [0, 2], expected: 1 },
        { list1: [0, 0, 1], list2: [0, 0, 2], expected: 1 },
    ])('should return the difference in distance for multiple sorted pairs', (data) => {
        const result = distance(data.list1, data.list2);
        expect(result).toBe(data.expected);
    });

    it.each([
        { list1: [0, 1], list2: [2, 0], expected: 1 },
    ])('should return the difference in distance for multiple unsorted pairs', (data) => {
        const result = distance(data.list1, data.list2);
        expect(result).toBe(data.expected);
    });


    it('part 1', () => {
        const result = distance(list1, list2);

        console.log(result);
    });
});

// [ Test cases ]
//
// single
// - does not appear in other list
// - does appear in other list
// - does appear in other list, multiple times
// multiple
// - first item does not appear in other list
// - first item does appear in other list
// - first item does appear in other list, multiple times
// - second item does appear in other list, returns total

describe('Day 01 - part 2', () => {
    it.each([
        { list1: [0], list2: [-1], expected: 0 },
        { list1: [1], list2: [-1], expected: 0 },
    ])('should return 0 for a single pair that does not appear in the other list', (data) => {
        const result = similarity(data.list1, data.list2);
        expect(result).toBe(data.expected);
    });

    it.each([
        { list1: [1], list2: [1], expected: 1 },
        { list1: [2], list2: [2], expected: 2 },
        { list1: [3], list2: [3], expected: 3 },
    ])('should return value times number of appearances in the other list for a single item', (data) => {
        const result = similarity(data.list1, data.list2);
        expect(result).toBe(data.expected);
    });

    it.each([
        { list1: [1], list2: [1], expected: 1 },
        { list1: [1], list2: [1, 1], expected: 2 },
        { list1: [1], list2: [1, 1, 1], expected: 3 },
        { list1: [2], list2: [2], expected: 2 },
        { list1: [2], list2: [2, 2], expected: 4 },
        { list1: [2], list2: [2, 2, 2], expected: 6 },
    ])('should return value times number of appearances in the other list for a single item', (data) => {
        const result = similarity(data.list1, data.list2);
        expect(result).toBe(data.expected);
    });

    it.each([
        { list1: [1, 2], list2: [1], expected: 1 },
        { list1: [1, 2], list2: [2], expected: 2 },
        { list1: [1, 3], list2: [3], expected: 3 },
        { list1: [1, 2, 3], list2: [3], expected: 3 },
        { list1: [1, 2], list2: [1, 2], expected: 3 },
        { list1: [1, 2], list2: [1, 1, 2], expected: 4 },
        { list1: [1, 2], list2: [1, 1, 2, 2], expected: 6 },
    ])('should returns total of values times number of appearances in the other list for a multiple items', (data) => {
        const result = similarity(data.list1, data.list2);
        expect(result).toBe(data.expected);
    });

    it('part 2', () => {
        const result = similarity(list1, list2);

        console.log(result);
    });
});