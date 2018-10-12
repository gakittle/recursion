// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
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
