/*
	二分查找结合快排
*/
var arr = [6, 7, 1, 4, 8, 2, 5];

console.log( search(arr, 38) );

function search(arr, target) {	
	if ( arr == null ) {
		return;
	}
	if ( arr.length == 1 ) {
		return arr[0] == target;
	}
	// [0, 6]
	var pointIndex = Math.floor( Math.random()*arr.length );
	var point = arr.splice(pointIndex, 1)[0];
	var left = [];
	var right = [];

	if ( point == target ) {
		return true;
	} else {
		for ( var i = 0; i < arr.length; i ++ ) {
			if ( arr[i] <= point ) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}
		// 判断是在左边还是右边
		if ( target < point && left.length) {
			return search(left, target);
		} else if ( target > point && right.length) {
			return search(right, target);
		} else {
			return false;
		}

	}
}