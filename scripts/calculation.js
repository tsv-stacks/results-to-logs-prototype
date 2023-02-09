// uncomment lines when running jest
// const { dataTable } = require('../scripts/ref-table')
// const { Input } = require("./input");

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
                let xLog = this.result.dilutionArray[i]
                console.log(x);
                // console.log(i);
                // console.log(xLog);
                // returns array from table
                let tableRef = dataTable[x]
                console.log(tableRef);
                //define limits
                let upperLimit = tableRef[1]
                let lowerLimit = tableRef[0]
                // add if statement to account for final number in array
                let nextDilution = array[i + 1]
                // console.log('upper limit' + upperLimit);
                // console.log('lower limit' + lowerLimit);
                // console.log('nextdilut' + nextDilution);
                let nextDilutionLog = this.result.dilutionArray[i + 1]
                // if statement to if nextdil is within limits
                if (this.limitCheck(nextDilution, lowerLimit, upperLimit) === true && nextDilution !== undefined) {
                    console.log('if in range and not final number in array');
                    console.log(x, nextDilution, xLog, nextDilutionLog);
                    return (x + nextDilution) / (xLog + nextDilutionLog)
                } else if (this.limitCheck(nextDilution, lowerLimit, upperLimit) === true && nextDilution === undefined) {
                    return x / xLog
                } else if (this.limitCheck(nextDilution, lowerLimit, upperLimit) === false && nextDilution === undefined) {
                    return x / xLog
                } else {
                    console.log('not in range')
                }
            }

        }
    }
    //limit detection
    limitCheck(x, lower, upper) {
        // console.log(x, lower, upper)
        if (x >= lower && x <= upper) {
            console.log('within range')
            return true
        }
        else {
            console.log('out of range')
            return false
        }
    }
    // get highest number from array
    // add logic to make sure if array.length>0 then do not use final number to calculate
    getMax(numbers) {
        let max = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        return max;
    }

}
const inputTest = new Input([100, 10, 1, 0, 0], [-1, -2, -3, -4, -5])
inputTest.dilutionConvert()
inputTest.limitReplace()
const resultTest = new Result(inputTest)
console.log(resultTest.calculationLoop());

if (typeof module !== "undefined" && module.exports) {
    module.exports = { Result };
} else {
    window.Result = Result;
}
