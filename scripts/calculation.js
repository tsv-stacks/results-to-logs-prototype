const { dataTable } = require('../scripts/ref-table')

class Result {
    constructor(result) {
        this.result = result;
    }
    // if results are zero output true
    isAllZeros() {
        let array = this.result.cleanArr
        return array.reduce((acc, cur) => acc && cur === 0, true);
    }
    // for loop to do calculations
    calculationLoop() {
        let array = this.result.cleanArr
        for (let i = 0; i < array.length; i++) {
            // check if element in array is a number
            if (typeof array[i] === 'number' && Number.isInteger(array[i])) {
                // true
                // pull key from data-table
                let x = array[i]
                // returns array from table
                let tableRef = dataTable[x]
                //define limits
                let upperLimit = tableRef[1]
                let lowerLimit = tableRef[0]
                let nextDilution = array[i + 1]
                // if statement to if nextdil is within limits
                // make into new function and add in 3 paramters

            }

        }
    }
    //limit detection
    limitCheck(x, lower, upper) {
        if (x >= lower && x <= upper) {
            console.log('within range')
        }
        else {
            console.log('out of range')
            return false
        }
    }
}

// function resultsToLog(input) {
//     if (isAllZeros(input) === true) {
//         // if results are zero output <10e
//         console.log('all 0')
//         return true
//     }
// }


module.exports = { Result }
