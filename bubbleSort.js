/*
	冒泡排序：
		时间复杂度：N + N-1 + N - 2 + .... + 1
		        = N(1 + N)/2
		        = N + N^2/2
		        = N^2
		        = big O(1) * N^2
		        = O(N^2)

		    = O(n^2)

				Sn = n(a1 + an)/2
				   = n*a1 + n(n-1)d/2

		空间复杂度：O(1)
*/
console.log( bubbleSort([3, 2, 7, 5, 0]) );
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