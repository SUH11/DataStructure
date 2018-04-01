/*
	数组实现固定大小的队列
*/

var q = new Queue(3);
q.push('asdfasdf');
console.log(q.pop());

console.log(q)

function Queue(initSize) {
	this.dataStorage = [];
	this.size = initSize;
	this.index = 0;
	this.peek = peek;
	this.push = push;
	this.pop = pop;
}

function peek() {
	if ( this.size == 0 ) {
		return null;
	}
	return this.dataStorage[this.index-1];
}

function push(obj) {
	if ( this.index == this.size ) {
		throw 'stack is full！';
	}
	this.dataStorage[this.index ++] = obj;
}
function pop() {
	if ( this.index == 0 ) {
		throw 'empty stack！'
	}
	return this.dataStorage[--this.index];
}


// function Queue(initSize) {
// 	this.dataStorage = [];
// 	this.size = initSize;
// 	this.index = 0;
// }

// Queue.prototype = {
// 	constructor: Queue,
// 	peek: function() {
// 		if ( this.size == 0 ) {
// 			return null;
// 		}
// 		return this.dataStorage[this.index-1];
// 	},
// 	push: function(obj) {
// 		if ( this.index == this.dataStorage.length ) {
// 			throw 'stack is full！';
// 		}
// 		this.dataStorage[this.index ++] = obj;
// 	},
// 	pop: function() {
// 		if ( this.index == 0 ) {
// 			throw 'empty stack！'
// 		}
// 		return this.dataStorage[--this.index];
// 	}
// };