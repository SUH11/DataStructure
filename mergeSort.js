/*
	归并排序
	master公式：T(N) = aT(N/b) + O(n^d)


	时间复杂度：O(n*logn)
	空间复杂度：O(1)

*/

var arr = [1, 5, 9, 4, 3, 10];
console.log(mergeSort(arr));
function mergeSort(arr) {
	if ( arr == null ) {
		return;
	}

	if ( arr.length == 1 ) {
		return arr;
	}

	var mid = parseInt(arr.length >> 1);
	var leftArr = arr.slice(0, mid);
	var rightArr = arr.slice(mid);

	return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
	var helpArr = [];
	var i = 0;
	var p1 = 0;
	var p2 = 0;	
	// 定义两个指针
	while(p1 < leftArr.length && p2 < rightArr.length) {
		helpArr[i++] = leftArr[p1] > rightArr[p2] ? rightArr[p2++] : leftArr[p1++];
	}

	while(p1 < leftArr.length) {
		helpArr[i++] = leftArr[p1++];
	}

	while(p2 < rightArr.length) {
		helpArr[i++] = rightArr[p2++];
	}

	return helpArr;
}