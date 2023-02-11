const BigNumber = require('bignumber.js');

class Input {
    constructor(arr, dilution) {
        this.arr = arr;
        this.cleanArr = [];
        this.dilution = dilution;
        this.dilutionArray = [];
    }
    // if array contains any empty spaces they are converted to 0
    replaceEmptyWithZero() {
        return this.arr.map(item => {
            if (item === null || item === undefined || item === "") {
                return 0;
            }
            return item;
        });
    }
    // convert any number over 150 to T
    limitReplace() {
        let arr = this.replaceEmptyWithZero()
        for (let i = 0; i < arr.length; i++) {
            if (i === arr.length - 1 && arr[i] >= 150) {
                this.cleanArr.push(arr[i]);
            } else if (arr[i] >= 150) {
                arr[i] = "T";
                this.cleanArr.push(arr[i])
            } else {
                this.cleanArr.push(arr[i])
            }
        }
        return this.cleanArr
    }
    // convert dilution array to array usable with calculations
    dilutionConvert() {
        for (let i = 0; i < this.dilution.length; i++) {
            if (this.dilution[i] === "N") {
                this.dilutionArray.push(1)
            } else {
                let dilu = BigNumber(0.1).pow(-this.dilution[i])
                dilu = Math.abs(dilu)
                this.dilutionArray.push(dilu)
            }
        }
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { Input };
} else {
    window.Input = Input;
}
