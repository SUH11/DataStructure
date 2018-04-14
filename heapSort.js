/*
	堆排序
		时间复杂度：O(nlogn)
		空间复杂度：O(logn)
		
	parentIndex:   (index - 1) >> 1;
	
	leftChildIndex: index * 2 + 1
	
	rightChildIndex: index * 2 + 2

*/

var arr = [1, 6, 9, 4, 3, 2];
console.log( heapSort(arr) );

function heapSort(arr) {
	if ( arr == null || arr.length < 2 ) {
		return;
	}
	for ( var i = 0; i < arr.length; i ++ ) {
		arr = heapInsert(arr, i);
	}
	var heapSize = arr.length - 1;

	var temp = arr[0];
	arr[0] = arr[heapSize];
	arr[heapSize] = temp;

	while( heapSize > 0 ) {
		arr = heapify(arr, 0, heapSize);
		var wrap = arr[0];
		arr[0] = arr[--heapSize];
		arr[heapSize] = wrap;
	}

	return arr;
}

// 构建一个堆
function heapInsert(arr, index) {
	while( arr[index] > arr[parseInt((index - 1) / 2)] ) {
		var temp = arr[index];
		arr[index] = arr[parseInt((index - 1) / 2)];
		arr[parseInt( (index - 1) / 2 )] = temp;
		index = parseInt((index - 1) / 2);
	}
	return arr;
}

// 堆中，往下沉  注意：1.最大的放到末尾   2.比较左右孩子，选择大的来进行交换，交换完成后，index值也交换
function heapify(arr, index, heapSize) {
	var left = index * 2 + 1;
	while( left < heapSize ) {
		var largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
		largest = largest > index ? largest : index;
		if ( largest == index ) {
			break;
		}
		var temp = arr[largest];
		arr[largest] = arr[index];
		arr[index] = temp;

		index = largest;
		left = index * 2 + 1;
	}
	return arr;
}
