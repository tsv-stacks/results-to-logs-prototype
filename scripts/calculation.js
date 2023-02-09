// const { dataTable } = require('../scripts/ref-table')

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

            if (this.isAllZeros() === true) {
                console.log('results are all 0')
                return `<${this.result.dilutionArray[0]}e`
            }
            else if (typeof array[i] === 'number' && Number.isInteger(array[i])) {
                // check if element in array is a number
                // true
                // pull key from data-table
                let x = array[i]
                let xLog = this.result.dilutionArray[x]
                // returns array from table
                let tableRef = dataTable[x]
                //define limits
                let upperLimit = tableRef[1]
                let lowerLimit = tableRef[0]
                let nextDilution = array[i + 1]
                let nextDilutionLog = this.result.dilutionArray[nextDilution]
                // if statement to if nextdil is within limits
                if (this.limitCheck(x, lowerLimit, upperLimit) === true && nextDilution !== undefined) {
                    return (x + nextDilution) / (xLog + nextDilutionLog)
                } else if (this.limitCheck(x, lowerLimit, upperLimit) === true && nextDilution === undefined) {
                    return x / xLog
                } else if (this.limitCheck(x, lowerLimit, upperLimit) === false && nextDilution === undefined) {
                    return x / xLog
                } else {
                    console.log('not in range')
                    return
                }
            }

        }
    }
    //limit detection
    limitCheck(x, lower, upper) {
        if (x >= lower && x <= upper) {
            console.log('within range')
            return true
        }
        else {
            console.log('out of range')
            return false
        }
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { Result };
} else {
    window.Result = Result;
}
