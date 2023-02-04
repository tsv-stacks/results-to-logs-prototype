const { resultsToLog } = require('../scripts/calculation.js')

describe('Testing using whole Integers', () => {
    let arr = [100, 10, 1, 0, 0]
    let arr0 = [0, 0, 0, 0, 0]

    it('Checks if results are all 0', () => {
        expect(resultsToLog(arr0)).toBe(true)
    })
})
