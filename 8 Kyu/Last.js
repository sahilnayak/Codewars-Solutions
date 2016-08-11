/* Description - Find the last element of a list. In javascript and CoffeeScript a list will be an array, a string or the list of arguments. */

function last(list){
	if(arguments.length!=1 ) return arguments[arguments.length-1] // returns last item in the arguments array
	else {
			if(typeof list === 'number') return list // returns list of argument size 1 and not a string or array
			else return list[list.length-1] // returns last item in the array
	}
}


/* Test Cases
Test.assertEquals(last([1,2,3,4,5]), 5);   //-- array
Test.assertEquals(last("abcde"), "e");     //-- string
Test.assertEquals(last(1,"b",3,"d",5), 5);//-- arguments
Test.assertEquals(last(5), 5);//-- only one argument
*/
