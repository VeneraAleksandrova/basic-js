const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    try {
      if (arguments.length < 2) {
        throw new Error("Incorrect arguments!");
      } else {
        const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        message = message.toUpperCase();
        key = key.toUpperCase();
        let result = "";
        let keyIndex = 0;
        for (let i = 0; i < message.length; i++) {
          const char = message[i];
          const keyChar = key[keyIndex % key.length];
          const shift = alphabet.indexOf(keyChar);
          if (alphabet.includes(char)) {
            let charIndex = (alphabet.indexOf(char) + shift) % alphabet.length;
            result += alphabet[charIndex];
            keyIndex++;
          } else {
            result += char;
          }
        }
        return this.direct ? result : result.split("").reverse().join("");
      }
    } catch {
      throw new Error("Incorrect arguments!");
    }
  }
  decrypt(message, key) {
    try {
      if (arguments.length < 2) {
        throw new Error("Incorrect arguments!");
      } else {
        const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        key = Array.from(key.toUpperCase())
          .map((char) => {
            let index = alphabet.indexOf(char);
            return alphabet[(alphabet.length - index) % alphabet.length];
          })
          .join("");

        return this.encrypt(message, key);
      }
    } catch {
      throw new Error("Incorrect arguments!");
    }
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
