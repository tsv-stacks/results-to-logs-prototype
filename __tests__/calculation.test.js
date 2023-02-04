const { isAllZeros, replaceEmptyWithZero } = require('../scripts/calculation.js')

describe('Testing using whole Integers', () => {
    let arr = [100, 10, 1, 0, 0]
    let arr0 = [0, 0, 0, 0, 0]

    it('Checks if results are all 0 and returns true', () => {
        expect(isAllZeros(arr0)).toBe(true)
    })

    it('Checks if results are all 0 and returns false if not true', () => {
        expect(isAllZeros(arr)).toBe(false)
    })
})

describe("replaceEmptyWithZero", () => {
    it("replaces empty values with 0", () => {
        const input = [1, 2, null, 4, "", 6];
        const expectedOutput = [1, 2, 0, 4, 0, 6];

        expect(replaceEmptyWithZero(input)).toEqual(expectedOutput);
    });

    it("leaves non-empty values unchanged", () => {
        const input = [1, 2, 3, 4, 5, 6];
        const expectedOutput = [1, 2, 3, 4, 5, 6];

        expect(replaceEmptyWithZero(input)).toEqual(expectedOutput);
    });
});
