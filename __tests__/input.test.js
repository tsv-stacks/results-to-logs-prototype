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

});
