// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// this function takes in an argument, and it looks 
// through the html body to find a class name that matches

// create empty array
// if body is target class, push to  array
// check if child belong to class
	// recure to see if child of that element belong to that class
var getElementsByClassName = function(className
) {
  var result = [];
  var isClass = function(element) {
  	if (element.classList && element.classList.contains(className)) {
  		result.push(element);
  	} 
  	if (element.hasChildNodes()) {
  		for (var i = 0; i < element.childNodes.length; i++)
  			isClass(element.childNodes[i]);
  	}
  }
  isClass(document.body);
  return result;
};
