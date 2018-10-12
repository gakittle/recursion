// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	//input: some object
	// var str
	// if it's an object
		// if it's an array
			// str += '[];'
			// return str + call function again

		// else 
			// str += '{}';
			// return str + call function again
		    // for var key in obj
		    	// if obj[key] exists
		    		// call function on key

	// for not objects, pass whole argument into stringify
		// else return argument.toString()
	// if typeof(obj) === 'function'??????????
	// base case: have reached end of obj ( } ), stop recursing
	//output: return some string plus stringifyJSON(rest of argument)

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
				console.log(obj[key]);
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
