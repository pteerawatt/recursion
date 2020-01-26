// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // this function takes in an object and turns it into a string
  // we can access key and value of object (for key in obj)

  // create an empty string
  // if boolean return true or false
  // if type of obj is string
  	// return string
  // if typeof = number
  	// break the number into array
  		// base case is when array.length is 0
  		// starting wtih last item and move up till its done
  // if typeof = array
  	// take them out of nest
  	// start with square brackets
  	// base case is when array.length is 0
  	// if element is string, use string function to add
  	// if element is number use number function to add code
  // if type of = object (.length is undefined)
  	// 	use objects.keys
  // if function return undefined
  var resultString = ''	
  var isBoolean = function (obj) {
  	if (obj === true) {
  		return 'true';
  	} else {
  		return 'false';
  	}
  	};

  var isString = function (obj) {
  	return `"${obj}"`;
  }

  var isNumber = function (obj) {
  	if (obj === NaN) {
  		return 'number';
  	} else {
  	return obj.toString()
  	  }	
  }

  // var isObject = function (obj) {
  // 	// go to last index and check if array
  // 		// if array, recall isArray
  // 	if (obj === null) {
  // 		return 'null';
  // 	} else if (Array.isArray(obj)) {
  // 		if (obj.length === 0) {
  // 			return '[]';
  // 		} else {
  // 			var result = '[';
  // 			for (var i = 0; i < obj.length; i++) {
  // 				if (Array.isArray(obj[i])) {
  // 					return '[' 
  // 				} else {
  // 					result += `${obj}`
  // 				}
  // 			}
  // 		}
  // 	} 
  // }  


  		// else if (obj.length === 1) {
  		// 	if (typeof obj[0] === 'string') {
  		// 		return `[${isString(obj[0])}]`
  		// 	}
  		// 	return `[${obj[0].toString()}]`;
  		// } else if (obj.length > 1) {
  		// 	return `[${(isObject(obj.slice(0, obj.length -1))).toString()}` + `, ${obj[obj.length -1].toString()}]`
  		// }
  		
  	
  
  if (typeof obj === 'boolean') {
  	resultString += isBoolean(obj);
  }

  if (typeof obj === 'string') {
  	resultString += isString(obj);
  }

  if (typeof obj === 'number') {
  	resultString += isNumber(obj);
  }
  if (obj === null) {
  	resultString += 'null';
  }
  if (typeof obj === 'object' && !!Array.isArray(obj)) {
  	resultString += '[' + obj.reduce(function(acc, value) {
  		if (value === undefined) {
  			return [...acc, 'null']
  		} else {
  			return [...acc, stringifyJSON(value)]
  		}
  	}, []).join(',') + ']'
  }

  return resultString;
};
