function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment(); // Here the count value increases to 1
increment(); // Here the count value increases to 2
increment(); // Here the count value increases to 3
log(); /* The log message will show Count is 0. This happens because the message variable containing count is only bound once when the createIncrement() is called. And since createIncrement is called only once, the message is set to count is 0. */
