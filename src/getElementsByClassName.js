// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // document.body, element.childNodes, and element.classList

  // input: className
  //elementsByClass = [];
  // select document.body

  // for some random element, do the following:
  	// for each of that element's children:
  		// if element.classList _.contains className
  		  // elementsByClass.push(element)
  		// return elementsByClass.concat(other call of function(element.childNodes));
  // output: HTML collection (array?) of <div>.className


  // base case: no child nodes or element does not have class in classList

  elementsByClass = [];
  var htmlCollect = function (el) {
  	var classes = el.classList;
  	if (_.contains(classes, className)) {
  		elementsByClass.push(el);
  	}
  	var children = el.childNodes;
  	children.forEach(function(node) {
  		return elementsByClass.concat(htmlCollect(node));
  	});
  };
  htmlCollect(document.body);
  return elementsByClass;
};
