/*
	对数器
*/
var testTime = 500000;
var size = 10;
var value = 100; // -100 ~ 100，值的范围，要修改则在generateRandomArray中做修改
var succeed = true;

for ( var i = 0; i < testTime; i ++ ) {
	var arr1 = generateRandomArray(size, value);
	var arr2 = copyArray(arr1);
	var arr3 = copyArray(arr1);
	arr1 = bubbleSort(arr1);
	arr2 = rightMethod(arr2);
	if ( !isEqual(arr1, arr2) ) {
		succeed = false;
		console.log( arr3 );
		break;
	}
}

console.log(succeed ? 'Nice !' : 'Not !!!');


function generateRandomArray(size, value) {
	var arr = [];
	for ( var i = 0; i < size; i ++ ) {
		arr.push( Math.floor((value - 1) * Math.random()) - Math.floor(value * Math.random()))
	}
	return arr;
}

// 要验证的排序算法
function bubbleSort(arr) {
	if ( arr == null || arr.length < 2 ) {
		return;
	}
	for ( var end = arr.length - 1; end > 0; end -- ) {
		for ( var i = 0; i < end; i ++ ) {
			if ( arr[i] > arr[i + 1] ) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}
		}
	}
	return arr;
}

// 绝对正确的排序方法
function rightMethod(arr) {
	return arr.sort(function(a, b) {
		return a - b;
	});
}

function copyArray(arr) {
	if ( arr == null ) {
		return null;
	}
	var copyArr = [];
	for ( var i = 0; i < arr.length; i ++ ) {
		copyArr[i] = arr[i];
	}
	return copyArr;
}

function isEqual(arr1, arr2) {
	if ( (arr1 == null && arr2 !== null) || (arr1 != null && arr2 == null) ) {
		return false;
	}
	if ( arr1 == null && arr2 == null ) {
		return true;
	}
	if ( arr1.length != arr2.length ) {
		return false;
	}
	for ( var i = 0; i < arr1.length; i ++ ) {
		if ( arr1[i] != arr2[i] ) {
			return false;
		}
	}
	return true;
}