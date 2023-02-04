const { resultsToLog } = require('../scripts/calculation.js')

describe('Testing output of main function', () => {
    let arr = [100, 10, 1, 0, 0]
    let arr0 = [0, 0, 0, 0, 0]

    xit('Checks if results are all 0 and returns dilution', () => {
        expect(resultsToLog(arr0)).toBe(true)
    })
})
