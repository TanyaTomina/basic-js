module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let deep = 1;

        for(let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                let currentDeep = this.calculateDepth(arr[i]) + 1;
                if (deep < currentDeep) {
                    deep = currentDeep;
                }
            }
        }
        return deep;
    }
};