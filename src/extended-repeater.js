module.exports = function repeater(str, options) {
    options.separator = options.separator || '+';
    options.additionSeparator = options.additionSeparator || '|';
    let newStr;
    let addString;

    if ((typeof options.repeatTimes ===  'number') ||  (typeof options.additionRepeatTimes === 'number')) {
        if (typeof options.addition === "undefined") {
            options.addition = '';
        }
        addString = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
        newStr = (str + addString + options.separator).repeat(options.repeatTimes - 1) + str + addString;
        return newStr;
    } else {
        return str + options.addition;
    }
};
  