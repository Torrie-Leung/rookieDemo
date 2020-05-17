// Short-circuit evaluation
// when evaluating boolean expressions(logical AND and OR) you can stop as soon as you find the first condition which satisfies or negates the expression.

// &&
console.log(123 && 456); // 456
console.log(0 && 456); // 0
console.log('' && 4*56 && 77*56); // 0
console.log(NaN && 4*56 && 77*56); // NaN
console.log(undefined && 4*56 && 77*56); // undefined