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
                let tableRef = dataTable.array[i]
            }

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
