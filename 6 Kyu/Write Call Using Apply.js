/* Description - Imagine JavaScript didn't natively include the call function. The apply function however still exists.

Using apply, write call.

Note: console.log internally uses the 'call' function, which therefore means you can't debug using console.log as it will either call an empty function or cause an infinite loop. */

Function.prototype.call = function(/**/) {
  // TODO
  let args = Array.prototype.slice.apply(arguments,[1]);
  return this.apply(arguments[0], args);
}

// This Kata requires you to write your own test...
// Example -  Test.assertEquals(1, 1,)


