function isSymmetrical(num) {
    const str = num.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  