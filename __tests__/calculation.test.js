const { Result } = require('../scripts/calculation.js')
const { dataTable } = require('../scripts/ref-table')

describe('Testing using whole Integers', () => {
    let result;
    let input = {
        arr: [],
        cleanArr: []
    }

    it('Checks if results are all 0 and returns true', () => {
        input.cleanArr = [0, 0, 0, 0, 0]
        result = new Result(input)
        expect(result.isAllZeros()).toBe(true)
    })

    it('Checks if results are all 0 and returns false if not true', () => {
        input.cleanArr = [100, 10, 1, 0, 0]
        result = new Result(input)
        expect(result.isAllZeros()).toBe(false)
    })

    it('Checks if results are all 0 and returns false if not true even if array does not contain numbers', () => {
        input.cleanArr = [120, 140, "T", "T", "T"]
        result = new Result(input)
        expect(result.isAllZeros()).toBe(false)
    })

    it('Checks if results are all 0 and returns false if not true even if array does not contain numbers', () => {
        input.cleanArr = [0, 0, "T", "T", "T"]
        result = new Result(input)
        expect(result.isAllZeros()).toBe(false)
    })
});

describe('Testing the limitCheck function', () => {
    let limit = new Result(jest.fn)

    test('limitCheck correctly checks if value is within limit', () => {
        const x = 2;
        const lowerLimit = 1;
        const upperLimit = 2;
        const result = limit.limitCheck(x, lowerLimit, upperLimit);
        expect(result).toBe(true);
    });

    test('limitCheck correctly returns false if value is not within limit', () => {
        const x = 3;
        const lowerLimit = 1;
        const upperLimit = 2;
        const result = limit.limitCheck(x, lowerLimit, upperLimit);
        expect(result).toBe(false);
    });
})




describe("testing calculationLoop method", () => {
    let input = {
        cleanArr: [],
        dilutionArray: [10, 100, 1000, 10000, 100000]
    }

    it("returns less than dilutionArray[0] if results are all 0", () => {
        input.cleanArr = [0, 0, 0, 0, 0]
        result = new Result(input)
        expect(result.calculationLoop()).toEqual('<10e');
    });

    xit("pulls the correct key from dataTable", () => {
        result.calculationLoop();
        expect(result.tableRef).toEqual({ 10: [0, 4] });
    });
});

describe('test.getMax', () => {
    const test = new Result(jest.fn)

    it('should return the highest number in an array', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = test.getMax(numbers);
        expect(result).toBe(5);
    });

    it('should return the only number in an array of length 1', () => {
        const numbers = [7];
        const result = test.getMax(numbers);
        expect(result).toBe(7);
    });

    it('should return 0 if the array is empty', () => {
        const numbers = [];
        const result = test.getMax(numbers);
        expect(result).toBe(0);
    });
});
