import {multiply, multiplyWithDont} from "./day03";
import {puzzleInput} from "./puzzleInput";

describe("day 03", () => {
    // no multiplications
    // single mul (1,1)
    // - different values (2,2)
    // multiple muls - mul(1,1)mul(2,2)
    // invalid muls
    
    it.each([
        { input: 'mul(1,1)', expected: 1 },
        { input: 'mul(1,2)', expected: 2 },
        { input: 'mul(2,2)', expected: 4 },
    ])('returns value of single mul', (data) => {
        expect(multiply(data.input)).toBe(data.expected);
    })

    it.each([
        { input: 'mul(1,1)mul(1,1)', expected: 2 },
        { input: 'mul(1,1)mul(1,2)', expected: 3 },
    ])('returns value of multiple muls', (data) => {
        expect(multiply(data.input)).toBe(data.expected);
    })

    it.each([
        { input: 'mul(1,1)mul(A,1)', expected: 1 },
        { input: 'mul(1,1)mul(1,A)', expected: 1 },
    ])('ignores value which is not a number', (data) => {
        expect(multiply(data.input)).toBe(data.expected);
    })

    it.each([
        { input: 'mul(1,1)!mul(A,1)', expected: 1 },
        { input: '!mul(1,1)mul(A,1)', expected: 1 },
        { input: 'mul(1,1)mul(A,1)!', expected: 1 },
        { input: 'mul(1,1) $mul(127#<{#mul(1,1)', expected: 2 }
    ])('ignores corrupt characters in between muls', (data) => {
        expect(multiply(data.input)).toBe(data.expected);
    })

    it.each([
        { input: 'mul(1,1)mul(1234,1)', expected: 1 },
    ])('ignores numbers over 3 digits', (data) => {
        expect(multiply(data.input)).toBe(data.expected);
    })

    it('part 1', () => {
        const result = multiply(puzzleInput);

        console.log(result);
    })

    it('part 2', () => {
        const result = multiplyWithDont(puzzleInput);

        console.log(result);
    })
})