/*
	桶排序例题：查找排序过后的两个相邻数组的最大值
*/

var arr = [0, 1, 6, 3, 10];
console.log( maxGap(arr) );
function maxGap(arr) {
	var min = 0;
	var max = 0;
	for ( var i = 0; i < arr.length; i ++ ) {
		min = Math.min(min, arr[i]);
		max = Math.max(max, arr[i]);
	}
	
	if ( min == max ) {
		return 0;
	}
	var hasNum = new Array(arr.length + 1);
	var mins = new Array(arr.length + 1);
	var maxs = new Array(arr.length + 1);
	var bid = 0;

	for ( var i = 0; i < arr.length; i ++ ) {
		bid = parseInt( (arr[i] - min) * arr.length / (max - min) ); // 存放到哪个桶
		mins[bid] = hasNum[bid] ? Math.min(mins[bid], arr[i]) : arr[i];
		maxs[bid] = hasNum[bid] ? Math.max(maxs[bid], arr[i]) : arr[i];
		hasNum[bid] = true;
	}

	var res = 0;
	var lastMax = maxs[0];

	console.log( hasNum );
	console.log( mins );
	for ( var i = 0; i <= arr.length; i ++ ) {
		if ( hasNum[i] ) {
			res = Math.max(res, mins[i] - lastMax);
			lastMax = maxs[i];
		}
	}

	return res;

}