// uncomment lines when running jest
const { dataTable } = require('../scripts/ref-table')
const { Input } = require("./input");

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
        let resultsArray = []
        for (let i = 0; i < array.length; i++) {
            if (this.isAllZeros() === true) {
                // results are all 0
                console.log('results are all 0')
                let n = -1 * (this.result.dilutionArray[0].toString().split('.')[1].length);
                let ans = Math.pow(0.1, n);
                return `<${ans}e`
            } else if (array[i] == 'T') {
                // function to skip over and continue loop
                continue
            } else if (typeof array[i] === 'number' && Number.isInteger(array[i])) {
                // check if element in array is a number
                // true
                let nextDilution = array[i + 1]
                let x = array[i]
                let xLog = this.result.dilutionArray[i]
                // console.log(x);
                // console.log(i);
                // console.log(xLog);

                // add if statement for numbers < 10. check if next number is falsey and then calculate

                // make it return as it means end of loop - no maxNum
                // if (x < 10 && !nextDilution) { function } else if

                //move this part to second if statement as maxNum needs to be performed

                // if (x < 10){ x / xLog } go through and outputboth but use closest to other samples

                // add if statement to account for final number in array
                if (nextDilution === null || nextDilution === undefined) {
                    // test
                    console.log('final number in array');
                    let finalResult = x / xLog
                    resultsArray.push(finalResult)
                    console.log(this.getMax(resultsArray));
                    return this.convertAndRound(this.getMax(resultsArray))
                }

                // continue loop


                // returns array from table
                let tableRef = dataTable[x]
                console.log(tableRef);
                //define limits
                let upperLimit = tableRef[1]
                let lowerLimit = tableRef[0]

                // console.log('upper limit' + upperLimit);
                // console.log('lower limit' + lowerLimit);
                // console.log('nextdilut' + nextDilution);
                let nextDilutionLog = this.result.dilutionArray[i + 1]
                // if statement to if nextdil is within limits
                if (this.limitCheck(nextDilution, lowerLimit, upperLimit) === true && nextDilution !== undefined) {
                    console.log('if in range and not final number in array');
                    console.log(x, nextDilution, xLog, nextDilutionLog);
                    let res = (x + nextDilution) / (xLog + nextDilutionLog)
                    resultsArray.push(res)
                    return this.convertAndRound(this.getMax(resultsArray))
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
    //convert and round to 3sf
    convertAndRound(num) {
        if (num >= 999) {
            let str = num.toExponential(2);
            let [a, b] = str.split("e");
            let aRounded = Number(a).toPrecision(3);
            return `${aRounded}e${b}`;
        } else {
            return Number(num.toPrecision(3));
        }
    }
}

// browser testing

// const inputTest = new Input([100, 10, 1, 0, 0], [-1, -2, -3, -4, -5])
// inputTest.dilutionConvert()
// inputTest.limitReplace()
// const resultTest = new Result(inputTest)
// console.log(resultTest.calculationLoop());

if (typeof module !== "undefined" && module.exports) {
    module.exports = { Result };
} else {
    window.Result = Result;
}
