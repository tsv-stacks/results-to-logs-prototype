class Input {
    constructor(arr) {
        this.arr = arr;
        this.cleanArr = [];
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
    limitCheck() {
        let arr = this.replaceEmptyWithZero()
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 150) {
                arr[i] = "T";
                this.cleanArr.push(arr[i])
            } else {
                this.cleanArr.push(arr[i])
            }
        }
    }
}

module.exports = { Input }
