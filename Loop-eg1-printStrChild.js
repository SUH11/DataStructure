/*
	列举字符串的所有子字符串
	如abc
		“”
		“abc”
		“ab”
		"ac"
		"bc"
		"b"
		"c"

	方法：
		a   ""  "a"  每个都是分两种情况，空和a，然后在穷举
		b
		c

*/
var str = 'abc';

printAll(str, 0, '');

function printAll(str, i, res) {
	if ( i == str.length ) {
		console.log('res: ' + res);
		return;
	}

	printAll(str, i + 1, res);
	printAll(str, i + 1, res + str[i]);
}