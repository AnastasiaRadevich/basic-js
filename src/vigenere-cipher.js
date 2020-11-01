const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (bool) {
    this.bool = bool;
  }

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


  encrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let resKey = key;
    let numb;
    let resMessage = '';
    while (message.length > resKey.length) {
      resKey  = resKey + key;
    }
    let j = 0;
    for (let i = 0; i < message.length ; i++) {
      if(this.alphabet.includes(message[i])) {
        numb = (this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(resKey[j])) % 26;
        resMessage = resMessage + this.alphabet[numb];
        j++;
      } else {
        resMessage = resMessage + message[i];
      }
    }
    if (this.bool === undefined || this.bool === true) {
      return resMessage;
    } else if (this.bool === false) {
      return resMessage.split('').reverse().join('');
    }
  }


  decrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let resKey = key;
    let numb;
    let resMessage = '';
    while (message.length > resKey.length) {
      resKey  = resKey + key;
    }
    let j = 0;
    for (let i = 0; i < message.length ; i++) {
      if(this.alphabet.includes(message[i])) {
        numb = (this.alphabet.indexOf(message[i]) + 26 - this.alphabet.indexOf(resKey[j])) % 26;
        resMessage = resMessage + this.alphabet[numb];
        j++;
      } else {
        resMessage = resMessage + message[i];
      }
    } 
    if (this.bool === undefined || this.bool === true) {
      return resMessage;
    } else if (this.bool === false) {
      return resMessage.split('').reverse().join('');
    }

  }
}


module.exports = VigenereCipheringMachine;
