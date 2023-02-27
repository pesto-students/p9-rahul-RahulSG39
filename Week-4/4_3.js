const FibonacciNumbers = (size) => ({
  [Symbol.iterator]: () => {
    let count = 1;
    let previousValue = 0,
      newValue = 0;
    return {
      next: () => {
        if (count++ <= size) {
          [previousValue, newValue] = [newValue, previousValue + newValue || 1];
          return { value: previousValue, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
});
console.log([...FibonacciNumbers(5)]); //[ 0, 1, 1, 2, 3 ]
