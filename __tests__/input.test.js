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
        input.limitCheck();
        expect(input.cleanArr).toEqual([120, 140, "T", "T", "T"]);
    });

    it('handles mixed types of inputs', () => {
        input = new Input([120, "", 140, undefined, 160, 170]);
        input.limitCheck();
        expect(input.cleanArr).toEqual([120, 0, 140, 0, "T", "T"]);
    });

    it('handles all values being empty or undefined', () => {
        input = new Input([null, undefined, "", "", null]);
        input.limitCheck();
        expect(input.cleanArr).toEqual([0, 0, 0, 0, 0]);
    });

});
