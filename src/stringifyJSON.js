// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

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
  
  if (typeof obj === 'boolean') {
  	resultString += isBoolean(obj);
  }

  else if (typeof obj === 'string') {
  	resultString += isString(obj);
  }

  else if (typeof obj === 'number') {
  	resultString += isNumber(obj);
  }
  else if (obj === null) {
  	resultString += 'null';
  }

  else if (typeof obj === 'object' && !!Array.isArray(obj)) {
  	// take the array and call the stringify() on each of the element
  	// turn it into a string
  	resultString += '[' + obj.reduce(function(acc, value) {
  		return [...acc, stringifyJSON(value)]
  	}, []).join(',') + ']'
  }
  else if (typeof obj == 'object' && obj.length === undefined) {
  	// list out keys in array
  	// join array with :value in between
  	// use stringify on each value
  	var keys = Object.keys(obj);
  	var values = Object.values(obj);
  	if (Object.keys(obj).length === 0 || 'functions' in obj || 'undefined' in obj) {
  		resultString += '{}';
  	} else {
  		var result = '{'
  		for (var i = 0; i < keys.length; i++) {
  			result += isString(keys[i]) + ':' + stringifyJSON(values[i]) + ',';
  		}
  		resultString = result.slice(0, result.length -1) + '}'
  		console.log(result);
  }
	}

  return resultString;
};
