class VigenereCipheringMachine {
    constructor(vigenere) {
        if (vigenere === false) {
            this.direct = false;
        } else if (vigenere === true || vigenere === undefined) {
            this.direct = true;
        }

    }
    encrypt(string, keyword) {

        if (!string || !keyword) {
            throw Error();
        } else {
            string = string.toUpperCase();
            keyword = keyword.toUpperCase();

            const A_CODE = 'A'.charCodeAt(0);
            const Z_CODE = 'Z'.charCodeAt(0);
            let encrypt_string = '';
            let new_keyword = keyword + keyword.repeat(Math.round(string.length/keyword.length));
            let j = 0;


            for (let i = 0; i < string.length; i++) {
                let letter_string = string.charCodeAt(i);
                let encrypt_letter = string[i];
                if (letter_string >= A_CODE && letter_string <= Z_CODE) {
                    let letter_key = new_keyword.charCodeAt(i-j);
                    encrypt_letter = (letter_key + letter_string - A_CODE);
                    if (encrypt_letter > Z_CODE) {
                        encrypt_letter = encrypt_letter - Z_CODE + A_CODE - 1;
                    }
                    encrypt_letter = String.fromCharCode(encrypt_letter);
                } else {
                    j++;
                }
                encrypt_string = encrypt_string + encrypt_letter;
            }
            if (this.direct) {
                return encrypt_string;
            } else {
                return encrypt_string.split('').reverse().join('');
            }

        }
    }

    decrypt(string, keyword) {
        if (!string || !keyword) {
            throw Error();
        } else {
            if (!this.direct) {
                string = string.split('').reverse().join('');
            }
            string = string.toUpperCase();
            keyword = keyword.toUpperCase();

            const A_CODE = 'A'.charCodeAt(0);
            const Z_CODE = 'Z'.charCodeAt(0);
            let encrypt_string = '';
            let new_keyword = keyword + keyword.repeat(Math.round(string.length/keyword.length));
            let j = 0;

            for (let i = 0; i < string.length; i++) {
                let letter_string = string.charCodeAt(i);
                let encrypt_letter = string[i];
                if (letter_string >= A_CODE && letter_string <= Z_CODE) {
                    let letter_key = new_keyword.charCodeAt(i-j);
                    encrypt_letter = (letter_string - letter_key + A_CODE);
                    if (encrypt_letter < A_CODE) {
                        encrypt_letter = encrypt_letter + Z_CODE - A_CODE + 1;
                    }
                    encrypt_letter = String.fromCharCode(encrypt_letter);
                } else {
                    j++;
                }
                encrypt_string = encrypt_string + encrypt_letter;
            }

                return encrypt_string;

        }
    }
}

module.exports = VigenereCipheringMachine;
