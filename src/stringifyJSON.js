// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var str = '';
	if (obj === null) {
		return 'null';
	} else if (typeof(obj) === 'object') {
		if (Array.isArray(obj)) {
			str += '[';
			if (obj.length === 0) {
				str += [].toString();
			}
			for (i = 0; i < obj.length; i++) {
				i > 0 ? str += ',' : str;
				str += stringifyJSON(obj[i]);
			}
			return str + ']';
			
		} else {
			str += '{';
			for (var key in obj) {
				if (typeof(obj[key]) === 'function') {
					return str + '}';
				}
				str === '{' ? str : str+= ',';
				if (obj[key] !== undefined) {
					str += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
				}
			}
			return str + '}';
		}
	} else if (typeof(obj) === 'string') {
		return '"' + obj.toString() + '"';
	} else {
		return obj.toString();
	}
};
