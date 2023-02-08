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




// describe("testing calculationLoop method", () => {
//     let input = {
//         arr: [],
//         cleanArr: [10]
//         // [10, 30, 50, 100, 147]
//     }
//     // let dataTable = {
//     //     10: [0, 4]
//     // };

//     beforeEach(() => {
//         result = new Result(input)
//         // dataTable = {
//         //     10: [0, 4]
//         //     // 30: [0, 8],
//         //     // 50: [1, 12],
//         //     // 100: [3, 19],
//         //     // 147: [6, 26]
//         // };
//     });

//     it("pulls the correct key from dataTable", () => {
//         result.calculationLoop();
//         expect(result.tableRef).toEqual({ 10: [0, 4] });
//     });
// });
