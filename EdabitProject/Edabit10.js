function squareDigits(num) {
    return parseInt(
      num
        .toString()
        .split('')
        .map(digit => (parseInt(digit) ** 2))
        .join('')
    );
  }
  