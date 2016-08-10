/* Description - Javascript functions can be combined to form new functions. For example the functions addOne and multTwo can be combined to form a new function which first adds one and then multiplies by two, as follows:

	const addOne = (a) => a + 1
	const multTwo = (b) => b * 2
	const addOneMultTwo = (c) => multTwo(addOne(c))

	addOneMultTwo(5) // returns 12

Combining functions like this is called function composition. Functional programming libraries in Javascript such as Ramda include a generic compose function which does the heavy lifting of combining functions for you. */

const addOne = (a) => a + 1
const multTwo = (b) => b * 2

function compose() {
  // Your solution
  var args = arguments;
  return function(value){
      if(args.length === 0) return value;
      else{
        value = [value];
        for(var i = args.length-1; i>=0; i--){
          value = [args[i].apply(this,value)];
        }
      return value[0];  
      }
  } 
}

/* Test Cases
Test.assertEquals(compose(multTwo, addOne)(5), 12, 'compose two functions')
Test.assertEquals(compose(addOne, multTwo, addOne, addOne)(2), 9, 'compose four functions')
Test.assertEquals(compose(addOne)(3), 4, 'compose one function')
Test.assertEquals(compose()(10), 10, 'compose no functions')*/