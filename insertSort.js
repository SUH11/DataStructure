/*
  选择排序：
    时间复杂度：O(n^2) 一律按最差的情况
           
    最好情况时间复杂度：O(n)
    最坏情况时间复杂度：O(n^2)

    空间复杂度：O(1)
*/

console.log( insertSort([3, 2, 7, 5, 0]) );

function insertSort(arr) {
	if ( arr == null || arr.length < 2 ) {
		return;
	}

	for ( var i = 1; i < arr.length; i ++ ) {
		for ( var j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j -- ) {
			var temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		}
	}

	return arr;
}