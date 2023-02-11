const { Input } = require('../scripts/input.js')

describe("Input class", () => {
    let input;

    it("can be instantiated", () => {
        input = new Input([])
        expect(input).toBeInstanceOf(Object);
    });

    it("replaces empty strings with 0", () => {
        input = new Input([1, 2, "", undefined, null, 3]);
        expect(input.replaceEmptyWithZero()).toEqual([1, 2, 0, 0, 0, 3]);
    });

    it("leaves non-empty values unchanged", () => {
        input = new Input([1, 2, 3, 4, 5, 6]);
        expect(input.replaceEmptyWithZero()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('replaces values greater than or equal to 150 with "T"', () => {
        input = new Input([120, 140, 160, 170, 180]);
        input.limitReplace();
        expect(input.cleanArr).toEqual([120, 140, "T", "T", 180]);
    });

    it('handles mixed types of inputs', () => {
        input = new Input([120, "", 140, undefined, 160, 170]);
        input.limitReplace();
        expect(input.cleanArr).toEqual([120, 0, 140, 0, "T", 170]);
    });

    it('handles all values being empty or undefined', () => {
        input = new Input([null, undefined, "", "", null]);
        input.limitReplace();
        expect(input.cleanArr).toEqual([0, 0, 0, 0, 0]);
    });

});

describe('dilutionConvert', () => {
    let input;

    beforeEach(() => {
        input = new Input(jest.fn)
    });

    it('converts dilution values to their corresponding powers of 10 in a standard format', () => {
        input.dilution = ["N", -1, -2, -3, -4, -5];
        input.dilutionConvert();
        expect(input.dilutionArray).toEqual([1, 10, 100, 1000, 10000, 100000]);
    });

    it('converts dilution values to their corresponding powers of 10', () => {
        input.dilution = [-1, -2, -3, "N", -10];
        input.dilutionConvert();
        expect(input.dilutionArray).toEqual([10, 100, 1000, 1, 10000000000]);
    });
});
