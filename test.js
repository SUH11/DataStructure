function deepClone(obj) {
	if ( typeof obj == 'object' ) {
		var cloneObj = {};
		for ( var key in obj ) {
			if ( typeof key == 'object' ) {
				deepClone();
			} else {
				cloneObj[key] = obj[key];
			}
		}
	} else {
		throw Error 'type error!';
	}
	return obj;
}