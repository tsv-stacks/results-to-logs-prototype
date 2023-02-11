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

    xit('should return 0 if the array is empty', () => {
        const numbers = [];
        const result = test.getMax(numbers);
        expect(result).toBe(0);
    });
});

describe("convertAndRound", () => {
    const test = new Result(jest.fn)

    it("should round 16000 to 1.6e4", () => {
        expect(test.convertAndRound(16000)).toBe("1.60e4");
    });

    it("should round 123456 to 1.23e5", () => {
        expect(test.convertAndRound(123456)).toBe("1.23e5");
    });

    it("should round 999.99 to 1000", () => {
        expect(test.convertAndRound(999.99)).toBe(1000);
    });

    it("no rounding if results are less than 999", () => {
        expect(test.convertAndRound(0.0123)).toBe(0.0123);
    });
});

describe("testing calculationLoop method", () => {
    let input = {
        cleanArr: [],
        dilutionArray: [0.1, 0.01, 0.001, 0.0001, 0.00001]
    }

    it("returns less than dilutionArray[0] if results are all 0", () => {
        input.cleanArr = [0, 0, 0, 0, 0]
        result = new Result(input)
        expect(result.calculationLoop()).toEqual('<10e');
    });

    it("returns correct results", () => {
        input.cleanArr = [100, 10, 1, 0, 0]
        result = new Result(input)
        expect(result.calculationLoop()).toEqual('1.00e+3');
    });

});
