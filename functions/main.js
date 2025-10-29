function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function reverseString(s) {
  // let string = '';
  // for (let i = s.length - 1; i >= 0; i--) {
  //   string += s[i];
  // }
  // return string;

  return [...s].reverse().join('');
}

const calculation = {
  add: function add(a, b) {
    if (typeof a === 'string') {
      return parseFloat(a) + b;
    }
    if (typeof b === 'string') {
      return parseFloat(b) + a;
    }
    return a + b;
  },

  /*
  would be good to add parseFloat or Int to the others 
  functions but i will stick with the best scenario */
  substract: function substract(a, b) {
    return a - b;
  },
  divide: function divide(a, b) {
    return a / b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(message, key) {
  let encryptedMessage = '';

  const shift = key % 26;

  for (let i = 0; i < message.length; i++) {
    const originalCharCode = message.charCodeAt(i);

    if (originalCharCode >= 65 && originalCharCode <= 90) {
      let newCharCode = originalCharCode + shift;

      if (newCharCode > 90) {
        newCharCode = newCharCode - 26;
      } else if (newCharCode < 65) {
        newCharCode = newCharCode + 26;
      }

      encryptedMessage += String.fromCharCode(newCharCode);
    } else if (originalCharCode >= 97 && originalCharCode <= 122) {
      let newCharCode = originalCharCode + shift;

      if (newCharCode > 122) {
        newCharCode = newCharCode - 26;
      } else if (newCharCode < 97) {
        newCharCode = newCharCode + 26;
      }

      encryptedMessage += String.fromCharCode(newCharCode);
    } else {
      encryptedMessage += message[i];
    }
  }

  return encryptedMessage;
}

function analyzeArray(arr) {
  if (arr.length === 0 || !arr) {
    return {
      average: null,
      min: null,
      max: null,
      length: 0,
    };
  }

  const len = arr.length;
  const sum = arr.reduce((acc, cur) => acc + cur);

  const average = sum / len;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average: average,
    min: min,
    max: max,
    length: len,
  };
}

export { capitalize, reverseString, calculation, caesarCipher, analyzeArray };
