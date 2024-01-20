// Function Expressions

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});
console.log(`Power of 2: ${squares}`);

const cube = numbers.map(getByThree);
console.log(`Power of 3: ${cube}`);

function getByThree(element) {
  return Math.pow(element, 3);
}

const evenNums = numbers.filter(function (element) {
  return element % 2 === 0;
});
console.log(`Even Numbers: ${evenNums}`);

const oddNums = numbers.filter(function(element) {
  return element % 2 !== 0;
});
console.log(`Odd Numbers: ${oddNums}`);

function getOddNums(element) {
  return element % 2 !== 0;
}

const total = numbers.reduce(function (accumulator, element) {
  return accumulator + element
});
console.log(`Total: ${total}`);

const average = numbers.reduce(function (accumulator, element) {
  return (accumulator + element) / numbers.length
});
console.log(`Average: ${average.toFixed(2)}`)

const minimum = numbers.reduce(function (accumulator, element) {
  return Math.min(accumulator, element);
});

console.log(`Min: ${minimum}`);

const maximum = numbers.reduce(function (accumulator, element) {
  return Math.max(accumulator, element);
});

console.log(`Max: ${maximum}`);


