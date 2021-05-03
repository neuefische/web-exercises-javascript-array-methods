const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const doubledNumbers = numbers.map((number) => number * 2);

const halvedNumbers = numbers.map((number) => number / 2);

const multipliedNumbers = numbers.map((number) => number ** 2);

console.table(doubledNumbers);
console.table(halvedNumbers);
console.table(multipliedNumbers);

export { doubledNumbers, halvedNumbers, multipliedNumbers };
