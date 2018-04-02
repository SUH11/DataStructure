/*
	如何拼接字符串才得到最小结果？
	如： ab  ef cd ==>. abcdef
*/

var arr = ['i', 'l', 'a'];

console.log(compare(arr));

function compare(arr) {
	arr.sort(function(a, b) {
		return a + b >= b + a;
	});
	return arr.join('');
}