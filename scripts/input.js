class Input {
    constructor(arr) {
        this.arr = arr;
        // cleanArr = [];
    }

    replaceEmptyWithZero() {
        return this.arr.map(item => {
            if (item === null || item === undefined || item === "") {
                return 0;
            }
            return item;
        });
    }
}

module.exports = { Input }
