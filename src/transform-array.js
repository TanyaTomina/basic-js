module.exports = function transform(arr) {
    let removed;
    let double;

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if(/^--discard-next$/.test(arr[i])) {
                if (i === arr.length - 1) {
                    removed = arr.splice(i, 1);
                } else {
                    removed = arr.splice(i, 2);
                    i = i - 1;
                }
            } else if (/^--discard-prev$/.test(arr[i])){
                if (i === 0) {
                    removed = arr.splice(i, 1);
                    i = i - 1;
                } else {
                    removed = arr.splice(i - 1, 2);
                    i = i -2;
                }
            } else if (/^--double-next$/.test(arr[i])) {
                if (i === arr.length - 1) {
                    removed = arr.splice(i, 1);
                } else {
                    double = arr[i + 1];
                    removed = arr.splice(i, 1, double);
                }
            } else if (/^--double-prev$/.test(arr[i])) {
                if (i === 0) {
                    removed = arr.splice(i, 1);
                    i = i - 1;
                } else {
                    double = arr[i - 1];
                    removed = arr.splice(i, 1, double);
                }
            }
        }
        return arr;
    } else {
        throw Error();
    }
};

