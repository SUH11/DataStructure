/*
	发布订阅
	伪代码
		Event = {
			name1: [fn1, fn2……],
			name2: [fn1, fn2……],
			name3: [fn1, fn2……],
			……
		}
*/
var Event = (function() {
	var list = {};
	var listen;
	var trigger;
	var remove;

	listen = function(key, fn) {
		if ( !list[key] ) {
			list[key] = [];
		}
		list[key].push(fn);
	};

	trigger = function() {
		var key = Array.prototype.shift.call(arguments);

	};

	remove = function(key, fn) {
		var msg = list[key];
		if ( !msg ) {
			return false;
		}
		if ( !fn ) {
			delete list[key];
		} else {
			for ( var i = 0; i < msg.length; i ++ ) {
				if ( fn === msg[i] ) {
					msg.splice(i, 1);
				}
			}
		}
	};
	return {
		listen,
		trigger,
		remove
	}

})();

var fn = function(data) {
	console.log(data + '推送');
}
Event.listen('谁谁', fn);
Event.trigger('谁谁', '1111');
Event.remove('谁谁', fn);