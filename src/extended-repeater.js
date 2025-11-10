const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let text = "";
  //str = str.toString();
  String(options.addition);
  if (
    typeof options.addition == "null" ||
    typeof options.addition == "undefined"
  ) {
    options.addition = "";
  } else {
    String(options.addition);
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  if (!options.separator) {
    options.separator = "+";
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    let addition = options.addition;
    for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
      addition += options.additionSeparator + options.addition;
    }

    let str_i = str + addition;
    let sep = options.separator;

    if (i == options.repeatTimes - 1) sep = "";

    text += str_i + sep;
  }

  return text;
}

module.exports = {
  repeater,
};
