function resultsToLog(input) {
    if (isAllZeros(input) === true) {
        // if results are zero output <10e
        console.log('all 0')
        return true
    }
    console.log(addUpArray(input))
}


// if results are zero output <10e
function isAllZeros(array) {
    return array.reduce((acc, cur) => acc && cur === 0, true);
}

// if array contains any empty spaces they are converted to 0
function replaceEmptyWithZero(array) {
    return array.map(item => {
        if (item === null || item === undefined || item === "") {
            return 0;
        }
        return item;
    });
}


module.exports = { resultsToLog, isAllZeros, replaceEmptyWithZero }
