// 汉诺塔问题  左中右
/*
	规则：大不能压小
		1   
		2
		3
		左   中	 右
*/
hanoi(2, '左', '右', '中');

function hanoi(n, from, to, help) {
	if ( n == 1 ) {
		console.log('Move 1 from ' + from + ' to ' + to);
	} else {
		hanoi(n - 1, from, help, to);
		console.log( 'Move ' + n + ' from ' + from + ' to ' + to);
		hanoi(n - 1, help, to, from);
	}
}