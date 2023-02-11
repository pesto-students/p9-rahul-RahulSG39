//Memoize program to compute Sum of numbers

function sum(...allItems) {
  return allItems.reduce((acc, cur) => acc + cur);
}

const memoize = (sum) => {
  const cache = new Map();
  return (...args) => {
    const key = args.toString();
    console.log("Calling memoize with :", key);
    if (cache.has(key)) return cache.get(key);
    cache.set(key, sum(...args));
    console.log(cache);
    return cache.get(key);
  };
};

const memoizeSum = memoize(sum);

function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}

time((fn) => memoizeSum(100, 100));
time((fn) => memoizeSum(100));
time((fn) => memoizeSum(100, 200));
time((fn) => memoizeSum(100, 100));

// Output =>
//
// Calling memoize with : 100,100
// Map(1) { '100,100' => 200 }
// default: 2.445ms
// Calling memoize with : 100
// Map(2) { '100,100' => 200, '100' => 100 }
// default: 0.101ms
// Calling memoize with : 100,200
// Map(3) { '100,100' => 200, '100' => 100, '100,200' => 300 }
// default: 0.091ms
// Calling memoize with : 100,100
// default: 0.08ms
