const { isAllZeros } = require('../scripts/calculation.js')

describe('Testing using whole Integers', () => {
    const arr = [100, 10, 1, 0, 0]
    const arr0 = [0, 0, 0, 0, 0]

    it('Checks if results are all 0 and returns true', () => {
        expect(isAllZeros(arr0)).toBe(true)
    })

    it('Checks if results are all 0 and returns false if not true', () => {
        expect(isAllZeros(arr)).toBe(false)
    })
})
