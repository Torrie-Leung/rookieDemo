// Short-circuit evaluation
// when evaluating boolean expressions(logical AND and OR) you can stop as soon as you find the first condition which satisfies or negates the expression.

// &&
console.log(123 && 456 && 'Thesewt'); // Thesewt
console.log(0 && 456); // 0
console.log('' && 4*56 && 77*56); // 0
console.log(NaN && 4*56 && 77*56); // NaN
console.log(undefined && 4*56 && 77*56); // undefined

// ||
console.log(123 || 456); // 123
console.log(0 || 456123 || 456); // 456123
console.log(0 || NaN || 456); // 456
let score = 0;
console.log(123 || score++);
console.log(score);