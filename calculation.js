function getOutput(x) {
    const y1 = Math.ceil(x / 14);
    const y2 = Math.ceil(x / 14) + 2;
    return [y1, y2];
}


let y = getOutput(145)
console.log(y)

function yValues(x) {
    let y1 = 0;
    let y2 = 4 + Math.floor((x - 10) / 5);
    if (x > 30) {
        y1 = Math.floor((x - 30) / 10) + 1;
        y2 += (y1 - 1) * 2;
    }
    return [y1, y2];
}

let z = yValues(145)
console.log(z)
