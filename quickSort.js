/*
	快速排序
		 时间复杂度：O(nlogn)
		 空间复杂度：O(logn)
*/

var arr = [1, 6, 9, 4, 3, 2];
console.log(quickSort2(arr))

function quickSort(arr) {
	if ( arr.length <= 0 ) {
		return arr;
	}
	var point = parseInt(Math.random()*arr.length);
	var num = arr.splice(point, 1);
	var left = [];
	var right = [];
	for ( var i = 0; i < arr.length; i ++ ) {
		if ( arr[i] <= num ) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat(num, quickSort(right));
}