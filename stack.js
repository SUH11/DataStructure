/*
	数组实现固定大小的队列
*/

var s = new Stack(3);
s.push('asdfasdf');
console.log(s.pop());

console.log(s)

function Stack(initSize) {
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
	// 特殊的栈，得到最小值
	// if ( MinStack.minPop() > obj ) {
	// 	MinStack.minPush(obj);
	// }
}
function pop() {
	if ( this.index == 0 ) {
		throw 'empty stack！'
	}
	return this.dataStorage[--this.index];
}

function MinStack() {
	this.dataStorageMin = [];
	this.size = 1;
	this.minPush = minPush;
	this.minPop = minPop;
}

function minPush(obj) {
	this.dataStorageMin[0] = obj;
}

function minPop() {
	if ( this.dataStorageMin.length == 0 ) {
		throw Error 'Min Stack is empty!';
	}
	return this.dataStorageMin[0];
}


// function Stack(initSize) {
// 	this.dataStorage = [];
// 	this.size = initSize;
// 	this.index = 0;
// }

// Stack.prototype = {
// 	constructor: Stack,
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