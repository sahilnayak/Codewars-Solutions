/* Description - The purpose of this kata is to write a higher-order function which is capable of creating a function that iterates on a specified function a given number of times. This new functions takes in an argument as a seed to start the computation from. */

var createIterator = function (func, n)
{
  return function (value) {
    for (var i = 0; i < n; i++){
      value = func(value);
    }
    return value;
  }
};

/* Test Cases 

Test.describe("Iterator for 'getDouble' function", function() {
  var getDouble = function (n) {
      return n + n;
    };
    
  Test.it("Running the iterator for once", function() {
    var doubleIterator = createIterator(getDouble, 1);
    
    Test.assertEquals(doubleIterator(3), 6, "Returns double of 3 as 6");
    Test.assertEquals(doubleIterator(5), 10, "Returns double of 5 as 10");
  });
  
  Test.it("Running the iterator twice", function() {
    var getQuadruple = createIterator(getDouble, 2);
    
    Test.assertEquals(getQuadruple(2), 8, "Returns quadruple of 2 as 8");
    Test.assertEquals(getQuadruple(5), 20, "Returns quadruple of 5 as 20");
  });
});

*/