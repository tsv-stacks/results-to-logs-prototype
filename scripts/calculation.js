class Result {
    constructor(result) {
        this.result = result;
    }
    // if results are zero output <10e

}

function resultsToLog(input) {
    if (isAllZeros(input) === true) {
        // if results are zero output <10e
        console.log('all 0')
        return true
    }
}


// if results are zero output <10e
function isAllZeros(array) {
    return array.reduce((acc, cur) => acc && cur === 0, true);
}


module.exports = { resultsToLog, isAllZeros, Result }
