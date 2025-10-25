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

export { capitalize, reverseString, calculation };
