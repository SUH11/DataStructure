/*
	数组实现队列
	
*/

function Queue(initSize) {
	this.dataStorage = [];
	this.size = initSize;
	this.index = 0;
	this.push = push;
	this.pop = pop;
}

function push(obj) {
	if ( this.index == this.size - 1 ) {
		throw Error 'The queue is full!';
	}
	this.dataStorage[this.index++] = obj;
}

function pop() {
	if ( this.dataStorage.length == 0 ) {
		throw Error 'The queue is empty!';
	}
	this.dataStorage.splice(0, 1);
	this.index --;
}