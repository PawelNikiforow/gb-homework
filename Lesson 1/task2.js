const calculateArea = function(...args) {
  let negatives = args.filter(number => number <= 0).length
  if (!negatives) {
    switch (args.length) {
      case 0: {
        return {area: null, figure: 'No arguments', input: args}
      }
      //Square
      case 1: {
        let [a, ...end] = args;
        return {area: a * a, figure: 'Square', input: args}
        break
      }
      //Rectangle
      case 2: {
        let [a, b, ...end] = args;
        return {area: a * b, figure: 'Rectangle', input: args}
        break
      }
      //Triangle
      case 3: {
        let [a, b, c, ...end] = args;
        let p = (a + b + c) / 2.0;
        if (a + b > c && a + c > b && b + c > a) {
          let area = Math.sqrt(p * (p - a) * (p - b) * (p - c))
          return {area: area, figure: 'Triangle', input: args}
        } else {
          return {area: null, figure: 'Error: such triangle does not exist', input: args}
        }
        break
      }
      default: {
        return {area: undefined, figure: 'Too many arguments', input: args}
      }
    }
  } else {
    return {area: null, figure: 'Error: negative arguments', input: args}
  }
}

console.log(calculateArea(-1, 1, -2))
console.log(calculateArea())
console.log(calculateArea(4))
console.log(calculateArea(7, 5))
console.log(calculateArea(3, 4, 5))
console.log(calculateArea(3, 4, 15))
console.log(calculateArea(3, 4, 5, 6, 7))