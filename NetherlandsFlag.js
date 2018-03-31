/*
	荷兰国旗问题
		arr和num
		arr中的数小于num，放左边
		arr中的数等于num，放中间
		arr中的数大于num，放右边
*/  

var arr = [1, 9, 6, 7, 8, 7, 4];
var num = 7;
console.log( sort(arr, num) );

function sort(arr, num) {
	var less = -1;
	var more = arr.length;
	var curr = 0;
	while ( curr != more ) {
		if ( arr[curr] < num ) {
			var temp = arr[curr];
			arr[curr++] = arr[++less];
			arr[less] = temp;
		} else if ( arr[curr] > num ) {
			var temp = arr[curr];
			arr[curr] = arr[--more];
			arr[more] = temp;
		} else {
			curr ++;
		}
	}
	return arr;
}


// 小于等于放左边，大于放右边
// function sort( arr, num) {
// 	for ( var i = 0; i < arr.length; i ++ ) {
// 		if ( arr[i] <= num ) {
// 			arr.unshift(arr.splice(i, 1)[0]);
// 		} else {
// 			arr.push(arr.splice(i, 1)[0]);
// 		}
// 	}
// 	return arr;
// }
// function sort(arr, num) {
// 	var x = -1;
// 	for ( var i = 0; i < arr.length; i ++ ) {
// 		if ( arr[i] <= num ) {
// 			x ++;
// 			console.log('x', x);
// 			var temp = arr[i];
// 			arr[i] = arr[x];
// 			arr[x] = temp; 
// 		}
// 	}
// 	return arr;
// }