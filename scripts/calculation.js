function resultsToLog(input) {
    // if results are zero output <10e
    if (isAllZeros(input) === true) {
        console.log('all 0')
        return true
    }
    console.log(addUpArray(input))
}

function isAllZeros(array) {
    return array.reduce((acc, cur) => acc && cur === 0, true);
}


function addUpArray(array) {
    return array.reduce((acc, cur) => acc + cur, 0);
}

module.exports = { resultsToLog }
